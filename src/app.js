import express from "express"
import "dotenv/config"
import { db as database } from "./db/index.js"

import { users } from "./db/schemas/schema.users.js"
import { artigos } from "./db/schemas/schema.artigos.js"
import { user } from "./db/schemas/schema.user"
import { between } from "drizzle-orm"

const server = express();
server.use(express.json());

server.post('/login', (req, res) => {
    //verificar se aquele usuario ja existe no banco de dados.
    //se exisitr retornar a resposta e carregar a homepage
    //se nao existir, encaminhar o usuario para criar sua conta (exibir mensagem de aviso)
});

//criar novo user e adicionar ele no banco de dados se ele ja nao exisitr.
//verificar se o user ja existe no bando de dados
server.post('/signin', async (req, res) => {
    try{
        const new_user = {
            username: req.body.username,
            senha: req.body.senha
        }

        //se o username for vazio, ou o tipo nao foi uma string (so numeros), ou for um dado indefinido
        if(new_user.username == "" || typeof new_user.username !== 'string' || new_user.username === undefined){
            throw new Error('Username not valid'); //1 significa que o username foi vazio
        }
        //se a senha for uma string ou for nao definida (vazio)
        if(new_user.senha === undefined || typeof new_user.senha === 'string'){
            throw new Error('Password not valid'); //2 significa que a senha 
        }

        await database.insert(users).values(new_user);
        return res.status(201).json('User criado com sucesso.');
    }
    catch(erro){
        return res(400).json({
            erro: erro.message,
            message: 'Os dados estao invalidos, verifique novamente...'
        });
    }
});

server.delete('/profile', (req, res) => {
    
});

server.put('/profile', (req, res) => {
    //alterar algum dado do usuario
});

export default server;
