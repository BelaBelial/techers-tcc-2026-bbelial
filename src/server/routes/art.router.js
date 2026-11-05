import express from "express"
import multer from "multer"
import { artController } from "../controller/art.controller.js"

const artRouter = express.Router();

//configuracao para salvar na pasta de uploads
const upload = multer({ dest: "uploads/" });

//cria o artigo enviando um arquivo .md no campo do arquivo
artRouter.post("/", upload.single("arquivo"), artController.createArtMd);

//listando os artigos
artRouter.get("/", artController.list);

export default artRouter;