import 'dotenv/config'; //importando o modulo

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/db/schemas/*', //caminho dos schemas
    out: './drizzle', //folder de migracao
    dialect: 'postgresql', //banco de dados (postgree)
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
});