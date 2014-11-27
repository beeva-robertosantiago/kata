/*global require: false, console: false*/
(function () {
    'use strict';

    var port = 9000, router,
        controllers,
        express = require('express'),
        cors = require('cors'),
        app = express(),
        path = require('path'),
        bodyParser = require('body-parser');

    app.use(cors());
    app.all('/*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
       if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        return res.end();
      } else {
        return next();
      }
      /*res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();*/
    });

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    router = express.Router();
    router.get('/', function (req, res) {
        res.sendfile(path.resolve(__dirname + '/../client') + '/index.html');
    });

    app.use('/services', router);
    app.use(express.static(path.resolve(__dirname + '/../client') + '/'));

   /* app.use(function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
       res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");
       if (req.method === 'OPTIONS') {
        res.statusCode = 204;
        return res.end();
      } else {
        return next();
      }
    });*/

    // se definen y cargan los controllers de la aplicacio
    controllers = ['Collection', 'MarvelComics'];
    controllers.forEach(function (controller) {
        require(['.', 'services', controller].join('/'))[controller](router);
    });

    app.listen(port);

    console.log('Listening', port);
}());