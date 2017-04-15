// server.js
//base setup
var config = require('./serverConfig');
var express = require('express');
var sqlite =  require('sqlite3').verbose();
var db = new sqlite.Database('../db/development.sqlite3');
var Promise = require('bluebird');

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
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(port)
console.log('Instacart server has started on ' + port);


// Promise.resolve()
//   // First, try to open the database
//   .then(() => db.open('../db/database.sqlite', { Promise }))      // <=
//   // Update db schema to the latest version using SQL-based migrations
//  // .then(() => db.migrate({ force: 'last' }))                  // <=
//   // Display error message if something went wrong
//   .catch((err) => console.error(err.stack))
//   // Finally, launch the Node.js app
//   .finally(() => {
//       app.listen(port)
//        console.log('Instacart server has started on ' + port);
//   });
