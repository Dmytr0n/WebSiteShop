const Router = require('express') // отримуємо маршрут з експреса
const router = new Router() // створюємо об'єкт роутер для маршрута
const deviceController = require('../controllers/deviceController')

// Запит для створення пристрою
router.post('/', deviceController.create)

// Запит для отримання всіх пристроїв
router.get('/', deviceController.getAll)

// Запит для отримання одного пристрою за id
router.get('/:id', deviceController.getOne)

// Запит для видалення пристрою за id
router.delete('/:id', deviceController.delete);

module.exports = router // експортуємо модуль
