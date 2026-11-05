import express from "express"
import "dotenv/config"
import userRouter from "./server/routes/user.router.js"
import artRouter from "./server/routes/art.router.js"
import cors from "cors" //autorizar outros servidores a pedir recursos 

const server = express();
server.use(cors());
server.use(express.json());
server.use("/users", userRouter);
server.use("/articles", artRouter);

export default server;