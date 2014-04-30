var parallelify = require('./parallelify')
  , basic = parallelify()
  , named = parallelify.named()

// basic usage
basic.add(function (cb) {
  cb(null, 1)
})

basic.add(function (cb) {
  cb(null, 2)
})

basic.exec(function (err, results) {
  console.log('basic', results)
})

// you can name things!
named.add('hello', function (cb) {
  cb(null, 'world')
})

named.add(function (cb) {
  cb(null, 'this result is ignored')
})

named.exec(function (err, results) {
  console.log('named', results)
})

// you can chain things!
parallelify()
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
    console.log('chained', results)
  })

