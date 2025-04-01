const Router = require('express') // отримуємо маршрут з експреса
const router = new Router() // створюємо об'єкт роутер для маршрута
const brandController = require('../controllers/brandController')


router.post('/', brandController.create) // запит щоб додати бренд
router.get('/', brandController.getAll) // запит щоб отримати бренд
router.delete('/:brandId', brandController.delete)

module.exports = router // експортуємо модуль