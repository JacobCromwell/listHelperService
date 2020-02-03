/*
var express = require('express');
var app = express();
let helloWorld  = require('./controllers/helloWorld.js');

app.route('/Hello').get(function(req,res) {
    let helloWorldMsg = helloWorld.data.getMsg();
    console.log('Msg: ', helloWorldMsg);
    res.send(helloWorldMsg);
});
app.route('/status').get(function(req,res)
{
    res.send('List Helper Service is running\nWe do not know how well');
});
app.get('/',(function(req,res){
    res.send('List Helper Service is running\nWe do not know how well');
}));

var server=app.listen(3000,function() {});
*/
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./controllers/queries')

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
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

app.get('/users', db.getUsers)