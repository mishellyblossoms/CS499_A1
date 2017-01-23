var express = require('express')
var app = express()
//var engines = require('consolidate');

//app.set('views', __dirname + '/views');
//app.engine('html', engines.mustache);
//app.set('view engine', 'html');
//app.use(express.static('myapp'))
app.use(express.static(__dirname));
app.get ('/', function (req, res){
    //console.log ('GET /');
    res.sendfile('Info.html')
//res.sendfile('dragon.gif')
    //res.render('Info.html')
    });
//    res.render('Info.html',{name:my_name,power:my_power})
//app.get('/', function (req, res) {
  //res.sendfile('Info.html')
//})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})