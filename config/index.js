// ./ means its local
var configValues = require('./config')

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb//' + configValues.uname + ':' + configValues.pwd + '@ds249942.mlab.com:49942/nodetodolist';
  }
}
