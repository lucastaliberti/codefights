/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[time limit] 4000ms (js)
[input] string s1

A string consisting of lowercase latin letters a-z.

Guaranteed constraints:
1 ≤ s1.length ≤ 15.

[input] string s2

A string consisting of lowercase latin letters a-z.

Guaranteed constraints:
1 ≤ s2.length ≤ 15.

[output] integer
*/
'use strict'
const expect = require('chai').expect

function commonCharacterCount (s1, s2) {
  const _s1 = s1.split('').reduce((a, v) => {
    a[v] = a[v] + 1 || 1
    return a
  }, {})

  const _s2 = s2.split('').reduce((a, v) => {
    a[v] = a[v] + 1 || 1
    return a
  }, {})

  const _s3 = Object.keys(_s1).reduce((a, v) => {
    const temp = (_s2[v] === undefined)
      ? 0 : (_s1[v] > _s2[v])
        ? _s2[v] : _s1[v]

    return a + temp
  }, 0)

  return _s3
}

describe('Intro Level3 - commonCharacterCount', () => {
  const tests = [
    { input: ['aabcc', 'adcaa'], expected: 3 },
    { input: ['zzzz', 'zzzzzzz'], expected: 4 },
    { input: ['abca', 'xyzbac'], expected: 3 },
    { input: ['a', 'b'], expected: 0 },
    { input: ['a', 'aaa'], expected: 1 }
  ]

  tests.map((v) => {
    it(`input: ${v.input}`, function () {
      expect(commonCharacterCount(...v.input)).to.be.equal(v.expected)
    })
  })
})
