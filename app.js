// packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app for bodyParser
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || 8080;

// Routes for API
var router = express.Router();

// test route
router.get('/', function(req, res) {
  res.json({ message: 'api is working'});
});

app.use('/api', router);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port);
console.log('Using port: ' + port);



