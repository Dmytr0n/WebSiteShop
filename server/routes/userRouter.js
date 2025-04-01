const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController'); // Імпортуємо контролер
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', UserController.registration); // Використовуємо UserController
router.post('/login', UserController.login);
router.get('/auth', authMiddleware, UserController.check);

module.exports = router;
