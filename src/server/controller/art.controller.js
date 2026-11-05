import { artService } from "../services/art.services.js";
import fs from "fs";

export const artController = {
    async criarArtMd(req, res){
        try {
            const arquivo = req.file;
            const {user_id, autor, titulo} = req.body;

            if(!arquivo){
                return res.status(400).json({erro: "There was no Markdown file sent..."});
            }

            const conteudoMd = fs.readFileSync(arquivo.path, "utf=8");

            const artData = {
                user_id,
                autor,
                titulo,
                conteudo: conteudoMd,
            };

            const newArt = await artService.createArt(artData);

            fs.unlinkSync(arquivo.path);

            return res.status(201).json({
                message: "Article successfully created via Markdown",
                article: newArt,
            })
        }
        catch(error){
            //tirando o arquivo temporario se ele existir

            if(req.file && fs.existsSync(req.file.path)){
                fs.unlinkSync(req.file.path);
            }
            return res.status(400).json({error: "An error occurred!"});
        }
    },

    async list(req, res){
        try{
            const artigos = await artService.listArts;
            return res.json(artigos);
        }
        catch(error){
            return res.status(500).json({erro: "An error occurred!"});
        }
    }
};