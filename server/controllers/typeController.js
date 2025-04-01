const {Type} =require('../models/models')
const ApiError = require('../error/ApiError');


class TypeController{
    async create(req, res){
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res){
        const types = await Type.findAll()
        return  res.json(types)
    }

    async delete(req, res) {
        const { typeId } = req.params; // отримуємо id бренду з параметрів запиту

        try {
            // Видаляємо бренд разом з усіма пристроями (через каскадне видалення)
            const deletedType = await Type.destroy({
                where: {
                    id: typeId
                }
            });

            // Якщо бренд не знайдений або не видалено
            if (!deletedType) {
                throw ApiError.notFound('Бренд не знайдений');
            }

            return res.json({ message: 'Бренд та всі пов\'язані з ним девайси успішно видалені' });
        } catch (error) {
            // Обробка помилок
            console.error(error);
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new TypeController()