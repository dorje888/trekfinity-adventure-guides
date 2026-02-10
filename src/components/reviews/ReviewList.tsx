import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface Review {
  id: string;
  user_email: string;
  rating: number;
  comment: string;
  destination?: string;
  created_at: string;
}

interface ReviewListProps {
  destination?: string;
}

export default function ReviewList({ destination }: ReviewListProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setError(null);
      setLoading(true);
      const query = supabase
        .from('reviews')
        .select('id, user_email, rating, comment, destination, created_at')
        .eq('approved', true)
        .order('created_at', { ascending: false });
      const { data, error } = destination ? await query.eq('destination', destination) : await query;
      if (error) {
        setError(error.message);
      } else {
        setReviews(data || []);
      }
      setLoading(false);
    };

    fetchReviews();
  }, [destination]);

  if (loading) return <p className="text-sm text-gray-600">Loading reviews...</p>;
  if (error) return <p className="text-sm text-red-600">{error}</p>;
  if (!reviews.length) return <p className="text-sm text-gray-600">No reviews yet. Be the first to leave one!</p>;

  return (
    <div className="space-y-4">
      {reviews.map((r) => (
        <div key={r.id} className="p-4 border rounded-md bg-white/70">
          <div className="flex items-center justify-between">
            <p className="font-medium">{r.user_email}</p>
            <p className="text-yellow-600">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</p>
          </div>
          <p className="mt-2 text-gray-800">{r.comment}</p>
          {r.destination && (
            <p className="mt-1 text-xs text-gray-500">Destination: {r.destination}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">{new Date(r.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
