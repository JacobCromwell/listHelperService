const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

console.log('pool: ', pool);

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createItem = (request, response) => {
  /*
  TODOs
    * pass in listID <- needs to be done via the BE side
  */
  //console.log('request.body: ', request.body);

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

module.exports = {
  getUsers,
  createItem
}