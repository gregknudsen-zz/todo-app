const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');


module.exports = function(app){

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended : true }));


  app.get('/api/todos/:username', function(req, res){
    Todos.find({username: req.params.username},
    function(err, todos){
      if (err) throw err;

      res.send(todos);
    })
  });

  app.get('api/todo/:id', function(req, res){
    Todos.findById({_id: req.params.id},
      function(err, todos){
        if (err) throw err;

        res.save(todo);
      });
  });

  app.post('/api/todo/:id', function(req, res){
    if(req.body.id){
      Todos.findByIdandUpdate({
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      }, function(err, todo){
        throw err;
        
        ('Success');
      }
    );

    }
  })
}
