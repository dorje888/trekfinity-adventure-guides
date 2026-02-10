import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useQuery } from '@tanstack/react-query';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const API_URL = import.meta.env.VITE_API_URL || '';

type Booking = {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  country: string | null;
  trek_name: string;
  preferred_date: string | null; // ISO date (YYYY-MM-DD)
  group_size: number | null;
  created_at: string; // ISO timestamp
};

function formatDate(d: string | null) {
  if (!d) return '-';
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleString();
}

const Registrations: React.FC = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery<Booking[]>({
    queryKey: ['registrations'],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/api/registrations`, { headers: { 'Accept': 'application/json' } });
      if (!res.ok) throw new Error(`Failed to load registrations (${res.status})`);
      return res.json();
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Registrations</h1>
            <p className="text-gray-600">View recent trek inquiries and bookings.</p>
          </div>
          <button onClick={() => refetch()} className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/90 disabled:opacity-50" disabled={isFetching}>
            {isFetching ? 'Refreshing…' : 'Refresh'}
          </button>
        </div>

        {isLoading && (
          <div className="text-gray-600">Loading registrations…</div>
        )}
        {isError && (
          <div className="text-red-600">Error: {(error as Error)?.message}</div>
        )}

        {data && data.length === 0 && (
          <div className="text-gray-600">No registrations yet.</div>
        )}

        {data && data.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Created</TableHead>
                  <TableHead>Full name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Trek</TableHead>
                  <TableHead>Preferred date</TableHead>
                  <TableHead>Group size</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((r) => (
                  <TableRow key={r.id} className="hover:bg-gray-50">
                    <TableCell className="whitespace-nowrap">{formatDate(r.created_at)}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.full_name}</TableCell>
                    <TableCell className="whitespace-nowrap">
                      <a className="text-primary hover:underline" href={`mailto:${r.email}`}>{r.email}</a>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">{r.phone || '-'}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.country || '-'}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.trek_name}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.preferred_date || '-'}</TableCell>
                    <TableCell className="whitespace-nowrap">{r.group_size ?? '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <p className="text-xs text-gray-500 mt-4">Set VITE_API_URL in your .env to your server origin (e.g. http://localhost:3001) if the API is on a different host.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Registrations;
