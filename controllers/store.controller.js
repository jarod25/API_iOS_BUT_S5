const StoreService = require('../services/store.service');

const getAllStores = (req, res) => {
    StoreService.findAll().then((stores) => {
        res.status(200).json(stores);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    getAllStores,
}