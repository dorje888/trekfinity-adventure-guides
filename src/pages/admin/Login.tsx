import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        const redirectTo = (location.state as any)?.from || '/admin/reviews';
        navigate(redirectTo, { replace: true });
      }
    });
  }, [navigate, location.state]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setAuthError(error.message);
      return;
    }
    const redirectTo = (location.state as any)?.from || '/admin/reviews';
    navigate(redirectTo, { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4 p-6 border rounded-xl bg-white">
              {authError && <p className="text-sm text-red-600">{authError}</p>}
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="mt-1 w-full border rounded p-2" value={email} onChange={(e)=>setEmail(e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input type="password" className="mt-1 w-full border rounded p-2" value={password} onChange={(e)=>setPassword(e.target.value)} required />
              </div>
              <Button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLoginPage;
