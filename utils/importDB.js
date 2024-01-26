const sequelize = require('./config.db');

const User = require('../models/user.model');
const Store = require('../models/store.model');

Store.hasMany(User, {foreignKey: 'id',});
User.belongsTo(Store, {foreignKey: 'id',});

sequelize.sync({alter: true, force: false})
    .then(() => {
        console.log('Database & tables created!');
    });
