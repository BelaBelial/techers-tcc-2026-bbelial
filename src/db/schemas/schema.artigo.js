import { pgTable, serial, text, integer, uuid } from 'drizzle-orm/pg-core' //pegando a tipagem da lib
import { sql } from "drizzle-orm"
import { user } from "./schema.user.js"

//as colunas vão ser um objeto, cada atributo é uma coluna
export const artigos = pgTable("artigos", {
    id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    //a linha do onDelete cascade basicamente configura um comportamento das tabelas com chave estrangeira 
    //isso ocorre a partir da funcao "referentes()"
    //isso basicamente significa que se o elemento/tabela pai for deletado, este elemento tambem sera
    user_id: uuid("user_id").notNull().references(() => user.id, {onDelete: "cascade"}), 
    autor: text("autor").notNull(),
    titulo: text("titulo").notNull(),
});