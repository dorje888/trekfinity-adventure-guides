import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import 'dotenv/config';
import { z } from 'zod';

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function ensureSchema() {
  const client = await pool.connect();
  try {
    await client.query('CREATE EXTENSION IF NOT EXISTS pgcrypto;');
    await client.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        country TEXT,
        trek_name TEXT NOT NULL,
        preferred_date DATE,
        group_size INTEGER,
        special_requirements TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      );
      CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON bookings (created_at DESC);
    `);
    console.log('DB schema ensured.');
  } catch (err) {
    console.error('Schema init error:', err);
    throw err;
  } finally {
    client.release();
  }
}

const registrationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  interestedTrek: z.string().optional().nullable(),
  preferredDate: z.string().optional().nullable(),
  groupSize: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
});

function parseGroupSize(value?: string | null) {
  if (!value) return null;
  if (/^\d+$/.test(value)) return parseInt(value, 10);
  if (/^\d+\+$/i.test(value)) return parseInt(value, 10);
  const m = value.match(/^(\d+)-(\d+)$/);
  if (m) return parseInt(m[1], 10);
  return null;
}

app.get('/health', async (_req: Request, res: Response) => {
  try {
    await pool.query('select 1');
    res.json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message });
  }
});

app.post('/api/registrations', async (req: Request, res: Response) => {
  const parsed = registrationSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'validation_error', details: parsed.error.flatten() });
  }
  const data = parsed.data;

  const full_name = `${data.firstName} ${data.lastName}`.trim();
  const trek_name = data.interestedTrek || 'General Inquiry';
  const group_size = parseGroupSize(data.groupSize ?? undefined);

  // Normalize date for Postgres DATE column
  const preferred_date = data.preferredDate ? new Date(data.preferredDate).toISOString().slice(0, 10) : null;

  try {
    const result = await pool.query(
      `INSERT INTO bookings (full_name, email, phone, country, trek_name, preferred_date, group_size, special_requirements)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
       RETURNING id, created_at`,
      [
        full_name,
        data.email,
        data.phone ?? null,
        data.country ?? null,
        trek_name,
        preferred_date,
        group_size,
        data.message ?? null,
      ]
    );
    res.status(201).json({ id: result.rows[0].id, created_at: result.rows[0].created_at });
  } catch (err: any) {
    console.error('DB insert error:', err);
    res.status(500).json({ error: 'db_error', message: err?.message });
  }
});

app.get('/api/registrations', async (_req: Request, res: Response) => {
  try {
    const result = await pool.query(
      `SELECT id, full_name, email, phone, country, trek_name, preferred_date, group_size, created_at
       FROM bookings
       ORDER BY created_at DESC`
    );
    res.json(result.rows);
  } catch (err: any) {
    console.error('DB select error:', err);
    res.status(500).json({ error: 'db_error', message: err?.message });
  }
});

const port = process.env.PORT || 3001;
ensureSchema()
  .then(() => app.listen(port, () => console.log(`API listening on http://localhost:${port}`)))
  .catch((e) => {
    console.error('Startup failed:', e);
    process.exit(1);
  });
