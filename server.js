var express = require('express'),
    app = express(),
    fs = require('fs'),
    morgan = require('morgan'),
    exphbs = require('express-handlebars');

require('./routes')(app);

// create a write stream (in append mode)
if (process.env.PORT != 3000){
  var accessLogStream = fs.createWriteStream('/var/access.log', {flags: 'a'});
  app.use(morgan(':remote-addr [:date[clf]] :method :url :status :response-time :referrer :user-agent',
                 {stream: accessLogStream}));
} else {
  app.use(morgan('short'));
}  

app.engine('.html', exphbs({defaultLayout: 'single', extname: '.html'}));
app.set('view engine', '.html');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', {title: 'Chris Learns JS', index:'active'});
});
app.get('/about', function(req, res) {
  res.render('about', {title: 'About - Chris Learns JS', about:'active'});
});
app.get('/blog', function(req, res) {
  res.render('blog', {title: 'Blog - Chris Learns JS'});
});

app.all('*', function(req, res) { 
  res.redirect('/'); 
});

var server = app.listen(process.env.PORT || 80, function() {
  
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});