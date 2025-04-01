const {Brand} =require('../models/models')
const ApiError = require('../error/ApiError');

class BrandController{
    async create(req, res){
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res){
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async delete(req, res) {
        const { brandId } = req.params; // отримуємо id бренду з параметрів запиту

        try {
            // Видаляємо бренд разом з усіма пристроями (через каскадне видалення)
            const deletedBrand = await Brand.destroy({
                where: {
                    id: brandId
                }
            });

            // Якщо бренд не знайдений або не видалено
            if (!deletedBrand) {
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

module.exports = new BrandController()