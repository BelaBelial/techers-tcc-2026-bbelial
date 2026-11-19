import { artService } from "../services/art.services.js";

export const artController = {
    async criarArt(req, res){
        try {
            const {user_id, autor, titulo, conteudo} = req.body;

            if(!conteudo || conteudo.trim() === ""){
                return res.status(400).json({erro: "The article content can't be undefined."});
            }

            const artData = {
                user_id,
                autor,
                titulo,
                conteudo: conteudo,
            };

            const newArt = await artService.createArt(artData);

            return res.status(201).json({
                message: "Article successfully created.",
                article: newArt,
            });
        }
        catch(error){
            //tirando o arquivo temporario se ele existir
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