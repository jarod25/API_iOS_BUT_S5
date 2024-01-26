const StoreModel = require('../models/store.model');

const findAll = () => StoreModel.findAll({include: [{all: true}]});

module.exports = {
    findAll,
}