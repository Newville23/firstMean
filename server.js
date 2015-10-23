//server.js

  //set-up
  var express  = require('express');
  var app      = express();            //crea la app con express
  var mongoose = require('mongoose');  //mongoose para mongodb
  var morgan = require('morgan');
  var bodyParser = require('body-parser');
  var methodOverride = require('method-override');
  var db = mongoose.connection;
  var port = 5000;


  //Configuration

  mongoose.connect('mongodb://localhost/test'); //conexión generada con la db instancia
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(callback){
    console.log('conexión exitosa Houston')
    });

    app.use(express.static(__dirname + '/public'));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({'extended':'true'}));
    app.use(bodyParser.json());
    app.use(bodyParser.json({type: 'application/vnd.api+json'}));
    app.use(methodOverride());

    //listen app
    app.listen(port);
    console.log('App escuchando petición por puerto 5000');


    //definir modelo

    var Todo = mongoose.model('Todo',{
      text : String
    });


    //Routes

      //API
      //obtener todas las tareas
      app.get('/api/todos', function(req, res){
        // metodo de mongoose para obtener todas las tareas
        Todo.find(function(err, todos){
          if(err)
            res.send(err)
            res.json(todos); // devuelve todos las tareas en forma de json
        })
      });
