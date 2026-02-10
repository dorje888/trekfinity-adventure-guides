import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface ReviewFormProps {
  destination?: string;
  onSubmitted?: () => void;
}

export default function ReviewForm({ destination, onSubmitted }: ReviewFormProps) {
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email || !comment) {
      setError('Email and comment are required.');
      return;
    }

    try {
      setLoading(true);
      const { error: insertError } = await supabase.from('reviews').insert({
        user_email: email,
        rating,
        comment,
        destination,
        approved: false,
      });

      if (insertError) throw insertError;
      setSuccess('Thanks! Your review was submitted and will be visible once approved.');
      setEmail('');
      setRating(5);
      setComment('');
      onSubmitted?.();
    } catch (err: any) {
      setError(err?.message || 'Failed to submit review');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md bg-white/70">
      <h3 className="text-lg font-semibold">Leave a Review</h3>
      {error && <p className="text-red-600 text-sm">{error}</p>}
      {success && <p className="text-green-700 text-sm">{success}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full border rounded p-2"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="mt-1 w-full border rounded p-2"
          >
            {[1,2,3,4,5].map(r => <option key={r} value={r}>{r} Star{r>1?'s':''}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="mt-1 w-full border rounded p-2"
          rows={4}
          placeholder="Share your experience"
        />
      </div>
      <button type="submit" disabled={loading} className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
        {loading ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
}
