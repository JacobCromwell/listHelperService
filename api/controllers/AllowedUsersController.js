const express = require('express');
const router = express.Router();
const { db } = require('../../db/sequelizeDB');
const validationService = require('../services/ValidationService')

router.get('/', (req, res) =>
    db.Allowed_Users.findAll()
        .then(allowed_users => {
            res.status(200).json(allowed_users);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
);

router.post('/', (req, res) => {
    const AllowedUserToCreate = {
        user_id: req.body.user_id,
        helper_list_id: req.body.helper_list_id,
        accepted: req.body.accepted
    };

    db.Allowed_Users.create(AllowedUserToCreate)
        .then(allowed_users => {
            console.log(allowed_users);
            res.status(200).json(allowed_users);
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

    db.Allowed_Users.update(updateObj,
        { returning: true, where: { id: req.params.id } })
        .then(allowed_users => {
            res.status(200).json(allowed_users);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
});


router.delete('/:id', (req, res) => {
    db.Allowed_Users.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(allowed_users => {
            console.log(allowed_users);
            res.status(200).json(allowed_users);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
});

module.exports = router;
