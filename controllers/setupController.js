const Todos = require('../models/todoModel');

module.exports = function(app){

  app.get('/api/setupTodos', function(req, res){

    let starterTodos = [
      {
        username: 'test',
        todo: 'go to store',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'take nap',
        isDone: false,
        hasAttachment: false
      },
      {
        username: 'test',
        todo: 'practice',
        isDone: false,
        hasAttachment: false
      }
    ]

    Todos.create(starterTodos, function(err, results){
      res.send(results);
    });
  });

}
