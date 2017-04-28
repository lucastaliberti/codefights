/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[time limit] 4000ms (js)
[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
*/
'use strict'
const expect = require('chai').expect

// function almostIncreasingSequence(sequence) {
//   return sequence.some((value, index, arr) => {
//     return arr
//       .filter((v, i) => i !== index)
//       .every((v2, i2, arr2) => (i2 > 0) ? v2 > arr2[i2 - 1] : true)
//   })
// }

function almostIncreasingSequence (s) {
  var ssize = s.length
  var i = ssize
  var j
  while (i--) {
    var c = true
    j = ssize
    while (j--) {
      if (j < i || j > i + 1) {
        if (s[j] <= s[j - 1]) {
          c = false
          break
        }
      } else if (j === i + 1) {
        if (s[j] <= s[j - 2]) {
          c = false
          break
        }
      }
    }
    if (c) {
      return true
    }
  }
  return false
}

describe('Intro Level2 - almostIncreasingSequence', function () {
  const tests = [
    { input: [1, 3, 2, 1], expected: false },
    { input: [1, 3, 2], expected: true },
    { input: [1, 2, 1, 2], expected: false },
    { input: [1, 4, 10, 4, 2], expected: false },
    { input: [10, 1, 2, 3, 4, 5], expected: true },
    { input: [1, 1, 1, 2, 3], expected: false },
    { input: [0, -2, 5, 6], expected: true },
    { input: [1, 2, 3, 4, 5, 3, 5, 6], expected: false },
    { input: [40, 50, 60, 10, 20, 30], expected: false },
    { input: [1, 1], expected: true },
    { input: [10, 1, 2, 3, 4, 5, 6, 1], expected: false },
    { input: [1, 2, 3, 4, 3, 6], expected: true },
    { input: [1, 2, 3, 4, 99, 5, 6], expected: true }
  ]

  tests.map((v) => {
    it(`input: ${v.input}`, function () {
      expect(almostIncreasingSequence(v.input)).to.be.equal(v.expected)
    })
  })
})
