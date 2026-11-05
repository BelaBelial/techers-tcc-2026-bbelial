import { artRepository } from "../repositories/art.repository.js";

export const artService = {
    async createArt(artData){
        //vendo se o artigo existe.
        const isArt = await artRepository.findByTitle(artData.title);
        
        if(isArt){
            throw new Error("There is an article with this title already.");
        }

        return await artRepository.create(artData);
    },

    async listArts(){
        return await artRepository.findArts();
    },

    async listUserArts(userId){
        return await artRepository.findUserArts(userId);
    },
    
    async searchByTitle(title){
        const artigo = await artRepository.findByTitle(title);
        
        if(!artigo){
            throw new Error("Article not found.");
        }
        return artigo;
    }
};