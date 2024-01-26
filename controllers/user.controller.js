const UserService = require('../services/user.service');

const createUser = (req, res) => {
    UserService.create(req.body).then((user) => {
        res.status(201).json(user);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err);
    });
}

const updateUser = (req, res) => {
    UserService.update(req.params.id_user, req.body).then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const getUserByStoreId = (req, res) => {
    UserService.findUserByStoreId(req.params.id).then((users) => {
        res.status(200).json(users);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const addUserToStore = (req, res) => {
    UserService.addUserToStore(parseInt(req.params.id_user), parseInt(req.params.id)).then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const removeUserFromStore = (req, res) => {
    UserService.removeUserFromStore(req.params.id_user).then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

const getLastUserId = (req, res) => {
    UserService.getLastUserId().then((user_id) => {
        res.status(200).json(user_id[0][0].id_user);
    }).catch((err) => {
        res.status(500).json(err);
    });
}

module.exports = {
    createUser,
    updateUser,
    getUserByStoreId,
    addUserToStore,
    removeUserFromStore,
    getLastUserId
}