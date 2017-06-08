var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});
app.post('/result', function(req, res){
    context = req.body;
    res.render('result', context);
});
app.listen(3000, function(){
    console.log('running on 3000');
});
