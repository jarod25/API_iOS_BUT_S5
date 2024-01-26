const Router = require('express').Router;
const StoreController = require('../controllers/store.controller');
const router = Router();

router.get('/', StoreController.getAllStores);

module.exports = router;