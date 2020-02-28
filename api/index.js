// Express Server
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./controllers/queries')
const dbItem = require('./controllers/item')
const dbUser = require('./controllers/UsersController')

const {sequelize} = require('../db/sequelizeDB');

sequelize.authenticate()
  .then(() => console.log('Successfully connected to DB using Sequelize...'))
  .catch(err => console.log('Error: ' + err));

// CORS bits
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/status', (request, response) => {
    try {
      response.json({ info: 'Node.js, Express, and Postgres API. Communicating with postgres via Sequelize ORM tool. Successful connection.' })
    } catch (error) {
      console.log('error: ' + error);
      throw error;
    }
});

app.use('/users', require('./controllers/UsersController'));

app.get('/item/:list_id', dbItem.getItem)
app.post('/item', dbItem.createItem)
app.put('/item/:id', dbItem.updateItem)
app.delete('/item/:id', dbItem.deleteItem)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});