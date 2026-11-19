import express from "express"
//import multer from "multer"
import { artController } from "../controller/art.controller.js"

const artRouter = express.Router();

//configuracao para salvar na pasta de uploads
//const upload = multer({ dest: "uploads/" });

//cria o artigo 
artRouter.post("/add-article", artController.criarArt);

//listando os artigos
artRouter.get("/home", artController.list);

export default artRouter;