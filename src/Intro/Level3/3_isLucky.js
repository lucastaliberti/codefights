/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
Input/Output

[time limit] 4000ms (js)
[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
*/
'use strict'
const expect = require('chai').expect

function isLucky (n) {
  const result = String(n).split('').reduce((a, v, i, arr) => {
    const x = parseInt(v)
    const index = (i >= arr.length / 2) ? 1 : 0

    a[index] = a[index] + x || x

    return a
  }, {})

  return result[0] === result[1]
}

describe('Intro Level3 - isLucky', () => {
  const tests = [
    { input: 1230, expected: true },
    { input: 239017, expected: false },
    { input: 134008, expected: true }
  ]

  tests.map((v) => {
    it(`input: ${v.input}`, function () {
      expect(isLucky(v.input)).to.be.equal(v.expected)
    })
  })
})
