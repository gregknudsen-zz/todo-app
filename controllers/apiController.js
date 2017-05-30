const Todos = require('../models/todoModel');
const bodyParser = require('body-parser');


app.get('/api/todos/:username', function(req, res){
  Todos.find()
})
