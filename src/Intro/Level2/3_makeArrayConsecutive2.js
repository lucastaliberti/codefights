/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

Input/Output

[time limit] 4000ms (js)
[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.

[output] integer

The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.
*/
'use strict'
const expect = require('chai').expect

function makeArrayConsecutive2 (statues) {
  return Math.abs(statues
    .sort((a, b) => parseInt(a) - parseInt(b))
    .reduce((acc, v, i, arr) => {
      if (i === 0) { return 0 }

      return acc + ((v - arr[i - 1]) - 1)
    }, 0))
}

describe('Intro Level2 - makeArrayConsecutive2', function () {
  const tests = [
    { input: [6, 2, 3, 8], expected: 3 },
    { input: [0, 3], expected: 2 },
    { input: [5, 4, 6], expected: 0 },
    { input: [6, 3], expected: 2 },
    { input: [1], expected: 0 }
  ]

  tests.map((v) => {
    it(`input: ${v.input}`, function () {
      expect(makeArrayConsecutive2(v.input)).to.be.equal(v.expected)
    })
  })
})
