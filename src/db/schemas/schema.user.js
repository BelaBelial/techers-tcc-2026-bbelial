import { pgTable, serial, text, integer, uuid } from 'drizzle-orm/pg-core' //pegando a tipagem da lib
import { sql } from "drizzle-orm"

//as colunas vão ser um objeto, cada atributo é uma coluna
export const user = pgTable("user", {
    id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    username: text("username").notNull(),
    senha: serial("senha").notNull(),
});