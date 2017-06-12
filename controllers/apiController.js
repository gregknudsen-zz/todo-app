const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');


module.exports = function(app){

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended : true }));


  app.get('/api/todos', function(req, res){
    Todos.find(function(err, todos){
      if (err) throw err;

      res.send(todos);
    });
  });

  app.get('/api/todos/:username', function(req, res){
    Todos.find({username: req.params.username},
    function(err, todos){
      if (err) throw err;

      res.send(todos);
    });
  });

  app.get('api/todo/:id', function(req, res){
    Todos.findById({_id: req.params.id},
      function(err, todo){
        if (err) throw err;

        res.send(todo);
      });
  });

  app.post('/api/todo', function(req, res){
    if(req.body.id){
      Todos.findByIdandUpdate(
        req.body.id,
        {
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment
        }, function(err, todo){
        throw err;

        res.send('Success');
      }
    );
  } else {
        var newTodo = Todos({
          username: "test",
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment
        });
        newTodo.save(function(err){
          if (err) throw err;
          res.send('Success');
        });
      }
    });
  }
