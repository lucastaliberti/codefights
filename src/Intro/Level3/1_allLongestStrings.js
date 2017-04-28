/*
Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

Input/Output

[time limit] 4000ms (js)
[input] array.string inputArray

A non-empty array.

Guaranteed constraints:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10.

[output] array.string

Array of the longest strings, stored in the same order as in the inputArray.
*/
'use strict'
const expect = require('chai').expect

function allLongestStrings (inputArray) {
  return inputArray.filter(i =>
    i.length === inputArray
      .reduce((a, v) => a > v.length ? a : v.length, 0)
  )
}

describe('Intro Level3 - allLongestStrings', () => {
  const tests = [
    {
      input: ['aba', 'aa', 'ad', 'vcd', 'aba'],
      expected: ['aba', 'vcd', 'aba']
    },
    { input: ['aa'], expected: ['aa'] },
    {
      input: ['abc', 'eeee', 'abcd', 'dcd'],
      expected: ['eeee', 'abcd']
    }
  ]

  tests.map((v) => {
    it(`input: ${v.input}`, function () {
      expect(allLongestStrings(v.input)).to.be.eql(v.expected)
    })
  })
})
