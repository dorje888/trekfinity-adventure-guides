import fs from 'fs';
import path from 'path';
import { Pool } from 'pg';
import 'dotenv/config';

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const client = await pool.connect();
  try {
    const sqlPath = path.resolve(process.cwd(), 'src/db/schema.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    await client.query('CREATE EXTENSION IF NOT EXISTS pgcrypto;');
    await client.query(sql);
    console.log('Migration applied.');
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
