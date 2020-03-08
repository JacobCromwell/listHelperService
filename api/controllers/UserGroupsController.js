const express = require('express');
const router = express.Router();
const { db } = require('../../db/sequelizeDB');
const validationService = require('../services/ValidationService')

router.get('/', (req, res) =>
    db.User_Groups.findAll()
        .then(user_Groups => {
            res.status(200).json(user_Groups);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);
        })
);

router.get('/:id', (req, res) => {
    if(validationService.validateRequired(req.params.id) === false) {
        throw 'id is required';
    }

    db.User_Groups.findByPk(req.params.id)
        .then(user_Groups => {
            res.status(200).json(user_Groups);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);
        })
    });

router.post('/', (req, res) => {
    const UserGroupsToCreate = {
        user_id: req.body.user_id,
        member_id: req.body.member_id,
        accepted: req.body.accepted
    };

    db.User_Groups.create(UserGroupsToCreate)
        .then(user_Groups => {
            console.log(user_Groups);
            res.status(200).json(user_Groups);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);
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

    db.User_Groups.update(updateObj,
        { returning: true, where: { id: req.params.id } })
        .then(user_Groups => {
            res.status(200).json(user_Groups);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);
        })
});


router.delete('/:id', (req, res) => {
    db.User_Groups.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(user_Groups => {
            console.log(user_Groups);
            res.status(200).json(user_Groups);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);
        })
});

module.exports = router;
