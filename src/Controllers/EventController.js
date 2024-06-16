const EventModel = require("../Models/EventModel");

class EventController {
    async create(req, res) {
        try{
            const event = await EventModel.create(req.body);
            return res.status(200).json(event);

        }catch(error){
            res.status(500).json({message:"Algo deu errado!", error:error.message });

        }        
    }
     
    async read(req, res) {
        try{
            const events = await EventModel.find();
            return res.status(200).json(events);            

        }catch(error){
            res.status(500).json({message:"Algo deu errado!",error:error.message });

        }        
        
    }

    async update(req, res) {
        
        try{
            const { id } = req.params;
            const foundEvent = await EventModel.findById(id);
            if(!foundEvent) 
                return res.status(404).json({message:"Evento não encontrado"});
            
            const event = await foundEvent.set(req.body).save();

            return res.status(200).json(event);            

        }catch(error){
            res.status(500).json({message:"Algo deu errado!",error:error.message });

        }
        
    }

    async delete(req, res) {
        try{
            const { id } = req.params;
            const foundEvent = await EventModel.findById(id);
            
            if(!foundEvent) 
                return res.status(404).json({message:"Usuário não encontrado"});
            
            await foundEvent.deleteOne();
            
            res.status(200).json({"mensagem": "Evento deletado com sucesso" });

        }catch(error){
            res.status(500).json({message:"Algo deu errado!",error:error.message });

        }        
        
    }
}

module.exports = new EventController();

