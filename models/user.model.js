const sequelize = require('../utils/config.db.js');
const {DataTypes} = require('sequelize');
const User = sequelize.define('user', {
        id_user: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        biography: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        timestamps: false,
    });

module.exports = User;