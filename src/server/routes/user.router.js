import express from "express"
import { getLoggin, getSignin } from "../controller/user.controller.js"

const userRouter = express.Router();
//base das rotas, a funcao que vai ser executada nessa rota, vai ser o controller

userRouter.post("/register", getSignin);
userRouter.post("/login", getLoggin);
//userRouter.delete("/profile", deleteUser);

export default { userRouter };