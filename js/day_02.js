const assert = require('assert')
const _ = require('redash')
const fs = require('fs')
const INPUT = fs.readFileSync('../inputs/day_02.txt', 'utf8')
  .split('\n')[0]

const splitRows = _.pipe([
  _.split('\n'),
  _.reject(_.isEmpty),
])

const parseRow = _.pipe([
  _.split(/\s+/),
  _.map(parseInt),
])

const computeLeastGreatestChecksum = _.pipe([
  xs => xs.sort((a, b) => a -b),
  xs => _.last(xs) - _.head(xs)
])

const exercise_01 = _.pipe([
  splitRows,
  _.map(_.pipe([parseRow, computeLeastGreatestChecksum])),
  _.sum,
])

console.log(exercise_01(INPUT))
assert.equal(exercise_01(INPUT), 32020)
