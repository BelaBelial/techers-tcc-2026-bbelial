import express from "express"
import "dotenv/config"
import userRouter from "./server/routes/user.router.js"
import artRouter from "./server/routes/art.router.js"

const server = express();
server.use(express.json());
server.use(userRouter);
server.use(artRouter);

export default server;