const assert = require('assert')
const _ = require('redash')
const fs = require('fs')
const INPUT = fs.readFileSync('../inputs/day_02.txt', 'utf8')

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
assert.equal(exercise_01(INPUT), 51139)

const computeDivisibleChecksum = xs => {
  xs = xs.sort((a, b) => a - b)
  for (let i = xs.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const a = xs[i]
      const b = xs[j]
      if (a % b === 0) return a / b
    }
  }
}

const exercise_02 = _.pipe([
  splitRows,
  _.map(_.pipe([parseRow, computeDivisibleChecksum])),
  _.sum,
])

console.log(exercise_02(INPUT))
assert.equal(exercise_02(INPUT), 272)
