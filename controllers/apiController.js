const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');


module.exports = function(app){

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended : true }));


  app.get('/api/todos/:username', function(req, res){
    Todos.find()
  });
}
