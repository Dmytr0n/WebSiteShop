const {Sequelize} = require('sequelize')// імпортуємо sequelize та робимо деструктуризацію.

module.exports = new Sequelize( //Експортуємо об'єкт даного класу.
     process.env.DB_NAME, //назва БД
     process.env.DB_USER, //ім'я користувача
     process.env.DB_PASSWORD, //пароль
     {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
     }
)