var p = require('./parallelify')()

p.add(function (cb) {
  setTimeout(function () {
    cb(null, 1)
  }, 200)
})

p.add(function (cb) {
  setTimeout(function () {
    cb(null, 2)
  }, 100)
})

p.exec(function (err, results) {
  console.log(results)
})
