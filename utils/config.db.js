const { Sequelize } = require('sequelize');
const { config } = require('dotenv');
config();
console.log(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
const sequelize = new Sequelize(
    `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
        omitNull: true,
        logging: process.env.NODE_ENV !== 'production' ? console.log : undefined
    }
);

module.exports = sequelize;