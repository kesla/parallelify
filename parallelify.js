var parallel = require('run-parallel')

module.exports = function () {
  var tasks = []

  return {
      add: function (fun) {
        tasks.push(fun)
      }
    , exec: function (callback) {
        parallel(tasks, callback)
      }
  }
}