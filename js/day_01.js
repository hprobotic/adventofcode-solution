const assert = require('assert')
const _ = require('redash')
const fs = require('fs')
const INPUT = fs.readFileSync('../inputs/day_01.txt', 'utf8')
  .split('\n')[0]

const exercise_01 = _.pipe([
  _.split(''),
  _.map(parseInt),
  xs => xs.filter((n, i) => {
    const next = i === xs.length - 1 ? xs[0] : xs[i + 1]
    return n === next
  }),
  _.sum,
])

console.log(exercise_01(INPUT))
assert.equal(exercise_01(INPUT), 1343)

const exercise_02 = _.pipe([
  _.split(''),
  _.map(parseInt),
  xs => xs.filter((n, i) => {
    const offset = xs.length / 2
    const overflow = (i + offset) - xs.length
    const next = xs[overflow >= 0 ? overflow : i + offset]

    return n === next
  }),
  _.sum,
])

console.log(exercise_02(INPUT))
assert.equal(exercise_02(INPUT), 1274)
