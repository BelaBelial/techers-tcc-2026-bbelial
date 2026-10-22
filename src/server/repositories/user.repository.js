import { eq } from "drizzle-orm"; //para achar o user especifico
import { db as database } from "../../db/index.js";
import { users } from "../../db/schemas/schema.user";
import { repository } from "../repositories/user.repository.js";

//busca o user pelo nome e insere ele no banco de dados
//sao as duas funcoes que o repository esta fazendo, mexendo com o banco de dados
//ambas essas funcoes podem ser usadas varias vezes nas ocasioes dentro do services
//por esse motivo que o service importa o repository do seu respectivo schema
//exporta um objeto que contem as funcoes que vao ser usadas para construir o servidor
export const userRepository = {
    async findByUsername(username){

        //o where aqui serve para achar um usuario especifico. sem isso, o select ia puxar todos os usuarios.
        //o eq serve para verificar se o usuario achado por users.username eh igual ao user do username procurado 
        //o username do user procurado esta sendo passado na funcao findbyusername
        const res = await database.select().from(users).where(eq(users.username, username));
        
        return res[0]; //retornando o primeiro user encontrado ou undefined se ele nao eixistir
    },

    async create(newUser){
        return await database.insert(users).values(newUser);
    }
};