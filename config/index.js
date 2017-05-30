const configValues = require('./config');

module.exports = {
  getDbConnectionString : function(){
    return "mongodb://" + configValues.username + ":" + configValues.password + "@ds157631.mlab.com:57631/node-todo-test"
  }
};
