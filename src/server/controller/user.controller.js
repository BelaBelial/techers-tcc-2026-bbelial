import { userService } from "../services/user.services.js"

//Controllers sao funcoes que recebem a requisicao e lidam com ela
//o controller so importa o service, pq o service eh como os processos com a requisicao vao acontecer
//o controller vai ser importado dentro de routes
//o controller sempre recebe requisicao e resposta, nessa ordem
//porque a resposabilidade dele eh extrair os dados da requisicao formar a resposta a partir disso

//needed functions:
/*
getLoggin() -> pegar do body o que foi passado como informacoes de login

getSignin() -> pegar do body o que foi passado como informacoes de signin
*/

export const getLoggin = async (req, res) => {
    const { username, password } = req.body();

    //pega os dados e passa para a funcao do service
    const ans = await userService.loginUser(username, password);
    res.status(200).json(ans);
};

export const getSignin = async (req, res) => {
    const { username, password } = req.body();

    const ans = await userService.signInUser(username, password);
    res.status(200).json(ans);
};