import { user } from "../../db/schemas/schema.user.js";
import { userRepository } from "../repositories/user.repository.js";

export const userService = {
    //funcao de sign in 
    async signInUser(username, password){
        try{
            //se o username for vazio, ou o tipo nao foi uma string (so numeros), ou for um dado indefinido
            if(username == "" || typeof username !== 'string' || username === undefined){
                throw new Error('Username not valid');
            }
            //se a senha for uma string ou for nao definida (vazio)
            if(password === undefined || typeof password === 'string'){
                throw new Error('Password not valid'); 
            }

            const curUser = await userRepository.findByUsername(username);

            //o select() do drizzle retorna um array se achar algo, entao se o array for vazio nao existe o que estamos procurando
            if(curUser && curUser.length > 0){
                throw new Error("User already exists, go to log in page.");
            }

            //passou pelas validacoes
            const newUser = {username, password};
            await userRepository.create(newUser);

            return { 
                success: true,
                message: "User succefully created!"
            }
        }
        catch(error){
            console.error("An error occurred...", error.message);

            throw error; //passa o erro para frente, para o controller lidar com ele.
            //isso significa que o controller vai ter o try catch dentro dele para lidar com o erro tambem
            //uma coisa vai levando a outra
        }
    },

    //funcao de login
    async loginUser(username, password){
        try{
            if(username == "" || typeof username !== 'string' || username === undefined){
                throw new Error('Username not valid');
            }
            if(password === undefined || typeof password === 'string'){
                throw new Error('Password not valid'); 
            }

            const curUser = await userRepository.findByUsername(username);
            
            if(!curUser && curUser.length === 0){
                throw new Error("User not found!");
            }

            const user = curUser[0];

            //vendo se a senha esta certa
            if(password !== user.password){
                throw new Error("Wrong password.");
            }
        
            return {
                success: true,
                message: "User logged in succesfully!",
                user: {
                    id: user.id,
                    username: user.username
                }
            }
        }
        catch(error){
            console.error("An error occurred...", error.mesage);
            throw error;
        }
    },

    async deleteUser(){

    }
}