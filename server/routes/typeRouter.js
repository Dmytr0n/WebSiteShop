const Router = require('express') // отримуємо маршрут з експреса
const router = new Router() // створюємо об'єкт роутер для маршрута
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), typeController.create) 
router.get('/',typeController.getAll) 
router.delete('/:typeId', typeController.delete)

module.exports = router // експортуємо модуль