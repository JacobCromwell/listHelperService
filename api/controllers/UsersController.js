const express = require('express');
const router = express.Router();
const { sequelize, db } = require('../../db/sequelizeDB');
const Users = require('../models/users');
const Helper_Lists = require('../models/helper_lists');

router.get('/', (req, res) =>
    db.Users.findAll()
        .then(users => {
            console.log(users);
            res.status(200).json(users);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
);

router.get('/:id', (req, res) =>
    db.Users.findByPk(req.params.id)
        .then(users => {
            console.log(users);
            res.status(200).json(users);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
);


router.get('/:id/helper_lists', (req, res) => {
    console.log('req.params: ' + req.params);
    let id = req.params.id;
    db.Users.findAll({
        include: [
            {
                model: db.Helper_Lists,
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

router.post('/', (req, res) => {
    let password_expir_date = new Date(Date.now() + 90).toLocaleString();
    let last_login_date = new Date(Date.now()).toLocaleString();
    const userToCreate = {
        username: req.body.username,
        lname: req.body.lname,
        fname: req.body.fname,
        password: req.body.password,
        password_expir: password_expir_date,
        email: req.body.email,
        active: false,
        last_login: last_login_date
    };

    db.Users.create(userToCreate)
        .then(users => {
            console.log(users);
            res.status(200).json(users);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
});

router.put('/:id', (req, res) => {
    let updateObj = {};
    let reqBody = req.body;
    for (var key in reqBody) {
        if (reqBody.hasOwnProperty(key)) {
            updateObj[key] = reqBody[key];
        }
    }

    db.Users.update(updateObj,
        { returning: true, where: { id: req.params.id } })
        .then(users => {
            console.log(users);
            res.status(200).json(users);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
});


router.delete('/:id', (req, res) => {
    db.Users.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(users => {
            console.log(users);
            res.status(200).json(users);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
});

module.exports = router;
