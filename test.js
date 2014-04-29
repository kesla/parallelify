// basis for this test is borrowed from
// https://github.com/feross/run-parallel/blob/master/test/array.js

var parallelify = require('./parallelify')
var test = require('tape')

test('functions run in parallel', function (t) {
  t.plan(4)

  var p = parallelify()

  p.add(function (cb) {
    t.pass('cb 1')
    cb(null)
  })

  p.add(function (cb) {
    t.pass('cb 2')
    cb(null)
  })

  p.add(function (cb) {
    t.pass('cb 3')
    cb(null)
  })

  p.exec(function (err) {
    t.error(err)
  })
})

test('functions that return results', function (t) {
  t.plan(4)

  var p = parallelify()

  p.add(function (cb) {
    t.pass('cb 1')
    cb(null, 1)
  })

  p.add(function (cb) {
    t.pass('cb 2')
    cb(null, 2)
  })

  p.exec(function (err, results) {
    t.error(err)
    t.deepEqual(results, [1, 2])
  })
})