const express = require('express');
const router = express.Router();
const sequelize = require('../../db/sequelizeDB');
const Users = require('../models/users');
const Helper_Lists = require('../models/helper_lists');

// Users is prepended to the front of all these routes
router.get('/', (req, res) =>
    Users.findAll()
        .then(users => {
            console.log(users);
            res.status(200).json(users[0].dataValues);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
);

router.get('/:id', (req, res) => {
    console.log('req.params: ' + req.params);
    let id = req.params.id;
    Users.findAll({ where: { id: id } })
        .then(users => {
            console.log(users);
            res.status(200).json(users[0].dataValues);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
});

router.get('/full/:id', (req, res) => {
    console.log('req.params: ' + req.params);
    let id = req.params.id;
    Users.findAll({
        include: [
            {
                model: Helper_Lists,
            }],
            where: { id: id }
        })
        .then(users => {
            console.log(users);
            res.status(200).json(users[0].dataValues);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
});

module.exports = router;
