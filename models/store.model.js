const sequelize = require('../utils/config.db.js');
const {DataTypes} = require('sequelize');
const Store = sequelize.define('store', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        latitude: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        longitude: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    },
    {
        timestamps: false,
    });

module.exports = Store;