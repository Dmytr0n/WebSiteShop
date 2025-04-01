require('dotenv').config() //імпортувати конфіг модулю dotenv
const express = require('express') //імпортуємо модуль експрес
const sequelize = require('./db') //підключення бд
const models = require('./models/models') //підключення моделей бд
const cors = require('cors') //підключаємо cors для обробки http запитів
const fileUpload = require('express-fileupload')
const router = require('./routes/index') //імпорт основного файлу з маршрутами
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000 //порт на якому апка буде працювати задається змінними оточення або за замовчуванням 5000

const app = express() // створення об'єкту з нього і буде розпочинатися запуск програми.
app.use(cors()) // використання корс в програмі
app.use(express.json()) // встановлення залежності для парсу json файлів.
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router) // вказали url за яким буде відбуватися маршрутизація.

//опрацювання помилок останній middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate() //функція для встановлення підключення до бд
        await sequelize.sync() //звіряє стан бд з тим що записано в бдт
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (e) {
        console.error("Error starting server:", e);
    }
};

// Викликаємо функцію запуску сервера
start();

  