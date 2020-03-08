const express = require('express');
const router = express.Router();
const { db } = require('../../db/sequelizeDB');
const Users = require('../models/users');
const Helper_Lists = require('../models/helper_lists');
const validationService = require('../services/ValidationService')

router.get('/', (req, res) =>
    db.Helper_Lists.findAll()
        .then(helper_lists => {
            res.status(200).json(helper_lists);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);;
        })
);

router.get('/:id', (req, res) => {

    if(validationService.validateRequired(req.params.id) === false) {
        throw 'id is required';
    }

    db.Helper_Lists.findByPk(req.params.id)
        .then(helper_lists => {
            res.status(200).json(helper_lists);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);;
        })
    });


router.get('/:id/items', (req, res) => {
    let id = req.params.id;
    db.Helper_Lists.findAll({
        include: [
            {
                model: db.Items,
            }],
        where: { id: id }
    })
        .then(helper_lists => {
            res.status(200).json(helper_lists[0].dataValues);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);;
        })
});


router.get('/:id/allowed_users', (req, res) => {
    let id = req.params.id;
    db.Helper_Lists.findAll({
        include: [
            {
                model: db.Allowed_Users,
            }],
        where: { id: id }
    })
        .then(helper_lists => {
            res.status(200).json(helper_lists[0].dataValues);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);;
        })
});

router.post('/', (req, res) => {
    const helperListToCreate = {
        user_id: req.body.user_id,
        private: req.body.private,
        list_type: req.body.list_type,
        list_name: req.body.list_name
    };

    db.Helper_Lists.create(helperListToCreate)
        .then(helper_lists => {
            console.log(helper_lists);
            res.status(200).json(helper_lists);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);;
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

    db.Helper_Lists.update(updateObj,
        { returning: true, where: { id: req.params.id } })
        .then(helper_lists => {
            console.log(helper_lists);
            res.status(200).json(helper_lists);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);;
        })
});


router.delete('/:id', (req, res) => {
    db.Helper_Lists.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(helper_lists => {
            console.log(helper_lists);
            res.status(200).json(helper_lists);
        })
        .catch(err => {
            console.log('Error: ' + err);
            res.status(500).send(err);;
        })
});

module.exports = router;
