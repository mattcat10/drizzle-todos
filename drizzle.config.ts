import 'dotenv/config';

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './schema.ts',
    out: './drizzle',
    driver: 'pg',
    dbCredentials: {
        password: process.env.PGPASSWORD,
        host: process.env.PGHOST!,
        user: process.env.PGUSER,
        database: process.env.PGDATABASE!,
        ssl: false
    }
});