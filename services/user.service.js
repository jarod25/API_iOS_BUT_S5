const UserModel = require('../models/user.model');
const StoreModel = require('../models/store.model');
const sequelize = require("../utils/config.db");


const create = (user) => {
    return sequelize.query(`INSERT INTO users VALUES (DEFAULT, '${user.firstName}', '${user.lastName}', '${user.sex}', '${user.company}', '${user.biography}', null); `);
}

const update = (id_user, user) => {
    let updatedUser = {
        id_user: user.id_user,
        firstName: user.firstName,
        lastName: user.lastName,
        sex: user.sex,
        company: user.company,
        biography: user.biography,
    }
    return UserModel.update(updatedUser, {where: {id_user: id_user}});
}

const findUserByStoreId = (id) => {
    return UserModel.findAll({where: {id: id}});
}

const addUserToStore = (id_user, id) => {
    return sequelize.query(
        `UPDATE users SET id = ${id} WHERE id_user = ${id_user}`
    )
}

const removeUserFromStore = (id_user) => {
    return sequelize.query(
        `UPDATE users SET id = null WHERE id_user = ${id_user}`
    )
}

const getLastUserId = () => {
    return sequelize.query(
        `SELECT id_user FROM users ORDER BY id_user DESC LIMIT 1`
    )
}

module.exports = {
    create,
    update,
    findUserByStoreId,
    addUserToStore,
    removeUserFromStore,
    getLastUserId
}