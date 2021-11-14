import {Type} from "../models/models.js"
import ApiError from "../Errors/ApiError.js"


class TypeController{

    create = async(req,res,next) => {
    try{
        const {name} = req.body;
        const type = await Type.create({name})
        return res.json(type)
    }catch(e){
        next(ApiError.badRequest(e.message))
    }
  
}

    getAll = async(req,res) => {
        const types = await Type.findAll();
        return res.json(types)
    }

    deleteOne = async(req,res) => {
        const {id} = req.body;
        await Type.destroy({where: {id}})
        return res.json(`Device with id ${id} has been removed`)
    }
    
}

export default new TypeController()