const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class deviceController{
    async create(req, res, next){
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} =req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName})

            if (info){
                info =JSON.parse(info)
                info.forEach(i => {
                  DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id
                  })  
                })
            }

            

            return res.json(device)
            
        }catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req, res, next) {
        try {
            let { brandId, typeId, limit, page } = req.query;
            page = page || 1;
            limit = limit || 9;
            let offset = (page - 1) * limit;
    
            let whereClause = {};
            if (brandId) whereClause.brandId = brandId;
            if (typeId) whereClause.typeId = typeId;
    
            const devices = await Device.findAndCountAll({
                where: whereClause,
                limit: parseInt(limit), // Переконайтеся, що це число
                offset: parseInt(offset),
            });
    
            return res.json(devices);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    


    async getOne(req, res){
        const {id} = req.params
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}] // Включаємо зв'язану таблицю DeviceInfo
        });
        return res.json(device)
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const device = await Device.findOne({ where: { id } });
            if (!device) {
                return next(ApiError.badRequest('Device not found'));
            }
            await DeviceInfo.destroy({ where: { deviceId: id } }); // Видаляємо додаткову інформацію
            await Device.destroy({ where: { id } }); // Видаляємо сам пристрій
            return res.json({ message: 'Device deleted successfully' });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new deviceController()