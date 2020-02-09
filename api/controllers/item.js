const db = require('./queries')
const validationService = require('../services/ValidationService')

let pool = db.getPool();

const createItem = (request, response) => {

    let { list_id, url, img_url, purchased, title, description } = request.body
    let create_date = new Date(Date.now()).toLocaleString();
    let update_date = new Date(Date.now()).toLocaleString();

    pool.query('INSERT INTO item (list_id, url, img_url, purchased, title, description, create_date, update_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [list_id, url, img_url, purchased, title, description, create_date, update_date], (error, results) => {
            if (error) {
                throw error
            }
            console.log('results: \n', results);
            response.status(201).send(`Item added with ID: ${results.insertId}`)
        })
}

const deleteItem = (request, response) => {

    const id = parseInt(request.params.id)
    if (validationService.validateRequired(id) === false) {
        throw 'id is required';
    }

    pool.query('DELETE FROM item WHERE id=$1',
        [id], (error, results) => {
            if (error) {
                throw error
            }
            console.log('results: \n', results);
            response.status(200).send(`Item was deleted`);
        })

}

const updateItem = (request, response) => {

    const id = parseInt(request.params.id)
    if (validationService.validateRequired(id) === false) {
        throw 'id is required';
    }

    let queryString = 'UPDATE item SET ';
    let count = 1;

    let { list_id, url, img_url, purchased, title, description } = request.body
    let arrayKeys = []

    let reqBody = request.body;
    for (var key in reqBody) {
        if (reqBody.hasOwnProperty(key)) {
            queryString += (key + ' = $' + count + ', ');
            count++;
            arrayKeys.push(reqBody[key]);
        }
    }
    queryString += 'update_date = $' + count + ' WHERE id = ' + id;

    console.log('queryString: ', queryString);
    let update_date = new Date(Date.now()).toLocaleString();
    arrayKeys.push(update_date);
    console.log('arrayKeys: ', arrayKeys);

    pool.query(
        queryString,
        arrayKeys,
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Item modified with ID: ${id}`)
        }
    )
}

module.exports = {
    createItem,
    updateItem,
    deleteItem
}