/*
Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
Input/Output

[time limit] 4000ms (js)
[input] string inputString

A non-empty string consisting of lowercase characters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 10.

[output] boolean

true if inputString is a palindrome, false otherwise.
*/
'use strict'
var expect = require('chai').expect

function checkPalindrome (inputString) {
  return inputString === inputString.split('').reverse().join('')
}

describe('Intro Level1 - checkPalindrome', function () {
  const tests = [
    { input: 'aabaa', expected: true },
    { input: 'abac', expected: false },
    { input: 'a', expected: true },
    { input: 'az', expected: false }
  ]

  tests.map((v) => {
    it(`inputString: ${v.input}`, function () {
      expect(checkPalindrome(v.input)).to.be.equal(v.expected)
    })
  })
})
