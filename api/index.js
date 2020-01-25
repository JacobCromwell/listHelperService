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