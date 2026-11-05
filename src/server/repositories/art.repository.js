import { artigos } from "../../db/schemas/schema.artigo.js";
import { db as database, db } from "../../db/index.js";
//exportando um objeto de funcoes do repository dentro dele

export const artRepository = {
    async findByTitle(title){
        const res = await db.select().from(artigos).where(eq(artigos.titulo, title));
        return res[0]; 
    },

    async findUserArts(userId){
        const res = await db.select().from(artigos).where(eq(artigos.user_id, userId));
        return res;
    },

    async create(artData){
        const reas = await db.insert(artigos).values(artData).returning();
        return res[0];
    },

    async findArts(){
        return await db.select().from(artigos);
    }
};