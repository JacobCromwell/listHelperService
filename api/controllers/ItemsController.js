const express = require('express');
const router = express.Router();
const { db } = require('../../db/sequelizeDB');
const validationService = require('../services/ValidationService')

router.get('/', (req, res) =>
    db.Items.findAll()
        .then(ItemsReturned => {
            res.status(200).json(ItemsReturned);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
);

router.get('/:id', (req, res) => {
    if(validationService.validateRequired(req.params.id) === false) {
        throw 'id is required';
    }

    db.Items.findByPk(req.params.id)
        .then(ItemsReturned => {
            res.status(200).json(ItemsReturned);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
    });

router.post('/', (req, res) => {
    const ItemsToCreate = {
        helper_list_id: req.body.helper_list_id,
        url: req.body.url,
        img_url: req.body.img_url,
        purchased: req.body.purchased,
        title: req.body.title,
        description: req.body.description
    };

    db.Items.create(ItemsToCreate)
        .then(ItemsReturned => {
            console.log(ItemsReturned);
            res.status(200).json(ItemsReturned);
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

    db.Items.update(updateObj,
        { returning: true, where: { id: req.params.id } })
        .then(ItemsReturned => {
            res.status(200).json(ItemsReturned);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
});


router.delete('/:id', (req, res) => {
    db.Items.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(ItemsReturned => {
            console.log(ItemsReturned);
            res.status(200).json(ItemsReturned);
        })
        .catch(err => {
            console.log('Error: ' + err);
            throw err;
        })
});

module.exports = router;
