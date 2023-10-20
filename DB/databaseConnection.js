// Terminado
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sakila', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
