import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';

interface Registration {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  status: 'pending' | 'approved' | 'blocked';
  created_at: string;
}

const AdminUsersPage: React.FC = () => {
  const [session, setSession] = useState<import('@supabase/supabase-js').Session | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  const [users, setUsers] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'approved' | 'blocked'>('all');

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

  const fetchUsers = async () => {
    setError(null);
    setLoading(true);
    const { data, error } = await supabase
      .from('registrations')
      .select('id, name, email, phone, status, created_at')
      .order('created_at', { ascending: false });
    if (error) setError(error.message);
    setUsers(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (session) fetchUsers();
  }, [session]);

  const filtered = useMemo(() => {
    return users.filter(u => {
      const s = search.toLowerCase();
      const matchesSearch = !search || u.name.toLowerCase().includes(s) || u.email.toLowerCase().includes(s) || (u.phone || '').toLowerCase().includes(s);
      const matchesStatus = filterStatus === 'all' || u.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [users, search, filterStatus]);

  const updateStatus = async (id: string, status: Registration['status']) => {
    const { error } = await supabase.from('registrations').update({ status }).eq('id', id);
    if (error) return alert(error.message);
    await fetchUsers();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Admin Users</h1>

            {!session ? (
              <form onSubmit={handleLogin} className="max-w-md space-y-4 p-6 border rounded-xl bg-white">
                <p className="text-sm text-gray-600">Login to manage users.</p>
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
                    <input className="mt-1 border rounded p-2" placeholder="name, email or phone" value={search} onChange={(e)=>setSearch(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Status</label>
                    <select className="mt-1 border rounded p-2" value={filterStatus} onChange={(e)=>setFilterStatus(e.target.value as any)}>
                      <option value="all">All</option>
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="blocked">Blocked</option>
                    </select>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Button variant="outline" onClick={()=>supabase.auth.signOut()}>Logout</Button>
                    <Button onClick={fetchUsers} disabled={loading}>{loading ? 'Refreshing...' : 'Refresh'}</Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr className="text-left text-sm text-gray-600">
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {error && (
                        <tr><td colSpan={6} className="p-4 text-red-600">{error}</td></tr>
                      )}
                      {!error && !filtered.length && (
                        <tr><td colSpan={6} className="p-4 text-gray-600">No users found.</td></tr>
                      )}
                      {filtered.map((u) => (
                        <tr key={u.id} className="border-t align-top">
                          <td className="p-3 text-sm text-gray-800">{u.name}</td>
                          <td className="p-3 text-sm text-gray-800">{u.email}</td>
                          <td className="p-3 text-sm text-gray-700">{u.phone || '-'}</td>
                          <td className="p-3 text-sm">
                            <span className={u.status === 'approved' ? 'text-green-700' : u.status === 'blocked' ? 'text-amber-700' : 'text-gray-700'}>{u.status}</span>
                          </td>
                          <td className="p-3 text-xs text-gray-500">{new Date(u.created_at).toLocaleString()}</td>
                          <td className="p-3 text-sm">
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={()=>updateStatus(u.id, 'approved')}>Approve</Button>
                              <Button size="sm" variant="destructive" onClick={()=>updateStatus(u.id, 'blocked')}>Block</Button>
                              <Button size="sm" onClick={()=>updateStatus(u.id, 'pending')}>Mark Pending</Button>
                            </div>
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

export default AdminUsersPage;
