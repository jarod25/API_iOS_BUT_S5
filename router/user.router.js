const Router = require('express').Router;
const UserController = require('../controllers/user.controller');
const router = Router();

router.get('/lastId', UserController.getLastUserId);
router.post('/', UserController.createUser);
router.put('/update/:id_user', UserController.updateUser);
router.get('/store/:id', UserController.getUserByStoreId);
router.put('/inStore/:id_user/store/:id', UserController.addUserToStore);
router.put('/outStore/:id_user', UserController.removeUserFromStore);

module.exports = router;