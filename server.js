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

/////////////////////////////////////////////////////////////////////////////////////////////////

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

          // crear un todo y envía devuleta todos los todo despues de la creación
          app.post('/api/todos', function(req, res){
            //crear un todo, ls información viene de un a petición de ajax desde angular
            Todo.create({
              text : req.body.text,
              done : false
            }, function(err, todo){
              if(err)
                res.send(err);
                //obten y devuelve todos los todo despues de crear otro
                Todo.find(function(err, todos){
                  if(err)
                    res.send(err)
                    res.json(todos);
                });
            });
          });
      //borrar una tarea
      app.delete('/api/todos/:todo_id', function(req, res){
        Todo.remove({
          _id : req.params.todo_id
        },function(err, todo){
          if(err)
          res.send(err);

          //obten y devuelve todas las tareas despues de crear otra
          Todo.find(function(err, todos){
            if(err)
              res.send(err)
              res.json(todos);
          });
        });
      });

///////////////////////////////////////////////////////////////////////////////////////////////////
//application
app.get('*', function(req, res){
  res.sendfile('./public/index.html'); // carga la pagina principal
})


///////////////////////////////////////////////////////////////////////////////////////////////////
    //listen app
    app.listen(port);
    console.log('App escuchando petición por puerto 5000');
