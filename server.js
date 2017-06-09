var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});
app.post('/result', function(req, res){
    res.render('result', req.body);
});
app.listen(3000, function(){
    console.log('running on 3000');
});
