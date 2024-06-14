const EventoModel = require("../Models/EventoModel");

class EventoController {
    async create(req, res) {
        try{
            const Evento = await EventoModel.create(req.body);
            return res.status(200).json(Evento);

        }catch(error){
            res.status(500).json({message:"Algo deu errado!", error:error.message });

        }        
    }
     
    async read(req, res) {
        try{
            // Aqui você precisa aguardar a resposta da consulta ao banco de dados
            const Eventos = await EventoModel.find();
            return res.status(200).json(Eventos);            

        }catch(error){
            res.status(500).json({message:"Algo deu errado!",error:error.message });

        }        
        
    }

    async update(req, res) {
        
        try{
            const { id } = req.params;
            const EventosEncontrado = await EventoModel.findById(id);
            if(!EventosEncontrado) 
                return res.status(404).json({message:"Evento não encontrado"});
            
            const Evento = await EventosEncontrado.set(req.body).save();


            //const Evento = await EventoModel.findByIdAndUpdate(id, req.body, { new: true })

            return res.status(200).json(Evento);            

        }catch(error){
            res.status(500).json({message:"Algo deu errado!",error:error.message });

        }
        
    }

    async delete(req, res) {
        try{
            const { id } = req.params;
            const EventosEncontrado = await EventoModel.findById(id);
            
            if(!EventosEncontrado) 
                return res.status(404).json({message:"Usuário não encontrado"});
            
            await EventosEncontrado.deleteOne();
            
            res.status(200).json({"mensagem": "Evento deletado com sucesso" });

        }catch(error){
            res.status(500).json({message:"Algo deu errado!",error:error.message });

        }        
        
    }
}

module.exports = new EventoController();

