import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';

interface Review {
  id: string;
  user_email: string;
  rating: number;
  comment: string;
  destination?: string | null;
  approved: boolean;
  created_at: string;
}

const AdminReviewsPage: React.FC = () => {
  const [session, setSession] = useState<import('@supabase/supabase-js').Session | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState<{ rating: number; comment: string } | null>(null);
  const [search, setSearch] = useState('');
  const [filterDestination, setFilterDestination] = useState('');
  const [filterApproved, setFilterApproved] = useState<'all' | 'approved' | 'pending'>('all');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
  };

  const fetchReviews = async () => {
    setError(null);
    setLoading(true);
    const { data, error } = await supabase
      .from('reviews')
      .select('id, user_email, rating, comment, destination, approved, created_at')
      .order('created_at', { ascending: false });
    if (error) setError(error.message);
    setReviews(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (session) fetchReviews();
  }, [session]);

  const beginEdit = (r: Review) => {
    setEditingId(r.id);
    setEditDraft({ rating: r.rating, comment: r.comment });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditDraft(null);
  };

  const saveEdit = async (id: string) => {
    if (!editDraft) return;
    const { error } = await supabase
      .from('reviews')
      .update({ rating: editDraft.rating, comment: editDraft.comment })
      .eq('id', id);
    if (error) {
      alert(error.message);
      return;
    }
    await fetchReviews();
    cancelEdit();
  };

  const toggleApprove = async (id: string, approved: boolean) => {
    const { error } = await supabase
      .from('reviews')
      .update({ approved })
      .eq('id', id);
    if (error) return alert(error.message);
    await fetchReviews();
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this review?')) return;
    const { error } = await supabase.from('reviews').delete().eq('id', id);
    if (error) return alert(error.message);
    await fetchReviews();
  };

  const filtered = useMemo(() => {
    return reviews.filter(r => {
      const matchesSearch = !search || r.comment.toLowerCase().includes(search.toLowerCase()) || r.user_email.toLowerCase().includes(search.toLowerCase());
      const matchesDest = !filterDestination || (r.destination || '').toLowerCase().includes(filterDestination.toLowerCase());
      const matchesApproved = filterApproved === 'all' || (filterApproved === 'approved' ? r.approved : !r.approved);
      return matchesSearch && matchesDest && matchesApproved;
    });
  }, [reviews, search, filterDestination, filterApproved]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Admin Reviews</h1>

            {!session ? (
              <form onSubmit={handleLogin} className="max-w-md space-y-4 p-6 border rounded-xl bg-white">
                <p className="text-sm text-gray-600">Login to manage reviews.</p>
                {authError && <p className="text-sm text-red-600">{authError}</p>}
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input type="email" className="mt-1 w-full border rounded p-2" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input type="password" className="mt-1 w-full border rounded p-2" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <Button type="submit">Login</Button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-wrap items-end gap-3">
                  <div>
                    <label className="block text-sm font-medium">Search</label>
                    <input className="mt-1 border rounded p-2" placeholder="email or comment" value={search} onChange={(e)=>setSearch(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Destination</label>
                    <input className="mt-1 border rounded p-2" placeholder="e.g. Kathmandu" value={filterDestination} onChange={(e)=>setFilterDestination(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Status</label>
                    <select className="mt-1 border rounded p-2" value={filterApproved} onChange={(e)=>setFilterApproved(e.target.value as any)}>
                      <option value="all">All</option>
                      <option value="approved">Approved</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Button variant="outline" onClick={()=>supabase.auth.signOut()}>Logout</Button>
                    <Button onClick={fetchReviews} disabled={loading}>{loading ? 'Refreshing...' : 'Refresh'}</Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr className="text-left text-sm text-gray-600">
                        <th className="p-3">Email</th>
                        <th className="p-3">Rating</th>
                        <th className="p-3">Comment</th>
                        <th className="p-3">Destination</th>
                        <th className="p-3">Approved</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {error && (
                        <tr><td colSpan={7} className="p-4 text-red-600">{error}</td></tr>
                      )}
                      {!error && !filtered.length && (
                        <tr><td colSpan={7} className="p-4 text-gray-600">No reviews found.</td></tr>
                      )}
                      {filtered.map((r) => (
                        <tr key={r.id} className="border-t align-top">
                          <td className="p-3 text-sm text-gray-800">{r.user_email}</td>
                          <td className="p-3 text-sm">
                            {editingId === r.id ? (
                              <input type="number" min={1} max={5} value={editDraft?.rating ?? r.rating} onChange={(e)=>setEditDraft(d=>({...(d||{rating:r.rating, comment:r.comment}), rating: Number(e.target.value)}))} className="w-20 border rounded p-1" />
                            ) : (
                              <span>{r.rating} / 5</span>
                            )}
                          </td>
                          <td className="p-3 text-sm w-[420px] max-w-[420px]">
                            {editingId === r.id ? (
                              <textarea value={editDraft?.comment ?? r.comment} onChange={(e)=>setEditDraft(d=>({...(d||{rating:r.rating, comment:r.comment}), comment: e.target.value}))} className="w-full border rounded p-2" rows={2} />
                            ) : (
                              <div className="max-w-[420px] whitespace-pre-wrap">{r.comment}</div>
                            )}
                          </td>
                          <td className="p-3 text-sm text-gray-700">{r.destination || '-'}</td>
                          <td className="p-3 text-sm">
                            <label className="inline-flex items-center gap-2">
                              <input type="checkbox" checked={r.approved} onChange={(e)=>toggleApprove(r.id, e.target.checked)} />
                              <span className={r.approved ? 'text-green-700' : 'text-amber-700'}>{r.approved ? 'Approved' : 'Pending'}</span>
                            </label>
                          </td>
                          <td className="p-3 text-xs text-gray-500">{new Date(r.created_at).toLocaleString()}</td>
                          <td className="p-3 text-sm">
                            {editingId === r.id ? (
                              <div className="flex gap-2">
                                <Button size="sm" onClick={()=>saveEdit(r.id)}>Save</Button>
                                <Button size="sm" variant="outline" onClick={cancelEdit}>Cancel</Button>
                              </div>
                            ) : (
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" onClick={()=>beginEdit(r)}>Edit</Button>
                                <Button size="sm" variant="destructive" onClick={()=>remove(r.id)}>Delete</Button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminReviewsPage;
