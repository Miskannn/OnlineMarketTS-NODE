import * as uuid from "uuid"
import path from "path"
import {Device,DeviceInfo} from "../models/models.js"
import ApiError from "../Errors/ApiError.js";



class DeviceController{
    create = async(req,res,next) => {
        const __dirname = path.resolve();
        try {
            let {name, price, brandId, typeId, info} = req.body;
            let img;
            if(req.files){
                img = req.files.img
            }
            let fileName = uuid.v4() + ".jpg";

            img && await img.mv(path.resolve(__dirname, 'static', fileName));

            const device = await Device.create({name, price, brandId, typeId, img: fileName ? fileName : null});

              if(info){
                  info = JSON.parse(info);
                  info.forEach(i => DeviceInfo.create({
                      title: i.title,
                      description: i.description,
                      deviceId: device.id
                  }))
              }
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    getAll = async(req,res,next) => {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }

    getOne = async(req,res) => {
        const {id} = req.params
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}]
        })
        return res.json(device)
    }
    deleteOne = async(req,res) => {
        const {id} = req.body
        await Device.destroy({where: {id}})
        return res.json(`Device with id ${id} has been removed`)
    }
}

export default new DeviceController()
