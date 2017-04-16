// server.js
//base setup
var config = require('./serverConfig');
var express = require('express');
var sqlite =  require('sqlite3').verbose();
var db = new sqlite.Database(config.dbLocation);

// Adding `cors` package
// so API allows calls by
// front-end (Allow-all)
var cors = require('cors');

var app = express();

var bodyParser = require('body-parser');

// set the port that the app runs on
var port = process.env.PORT || config.port || 8080;

// setup routes
var router = express.Router();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setup routes
var userRoutes = require('./routes/userRoutes');
var funnelsRoutes = require('./routes/funnelsRoutes');

var UserController = require('./controllers/userController');
var FunnelsController = require('./controllers/funnelsController');

userRoutes(router, new UserController(db));
funnelsRoutes(router, new FunnelsController(db));

// changethis to use CORS middle wear enabled by using dev options
// since we are serving data from the same localhost, enable on demo
if(config.isDemo) {
    app.use(cors());
}

// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(port)
console.log('Instacart server has started on ' + port);
