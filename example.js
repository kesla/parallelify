require('./parallelify')()
  .add(function (cb) {
    setTimeout(function () {
      cb(null, 1)
    }, 200)
  })
  .add(function (cb) {
    setTimeout(function () {
      cb(null, 2)
    }, 100)
  })
  .exec(function (err, results) {
    console.log(results)
  })
