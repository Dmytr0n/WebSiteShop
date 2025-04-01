const Router = require('express') // отримуємо маршрут з експреса
const router = new Router() // створюємо об'єкт роутер для маршрута
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter) //створення маршруту користувач
router.use('/type', typeRouter) //створення маршруту тип
router.use('/brand',brandRouter) //створення маршруту бренд
router.use('/device', deviceRouter) //створення маршруту пристрій

module.exports = router // експортуємо модуль