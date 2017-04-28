/*
Write a function that returns the sum of two numbers.

Example

For param1 = 1 and param2 = 2, the output should be
add(param1, param2) = 3.

Input/Output

[time limit] 4000ms (js)
[input] integer param1

Guaranteed constraints:
-100 ≤ param1 ≤ 1000.

[input] integer param2

Guaranteed constraints:
-100 ≤ param2 ≤ 1000.

[output] integer

The sum of the two inputs.
*/
'use strict'
var expect = require('chai').expect

function add (param1, param2) {
  return param1 + param2
}

describe('Intro Level1 - add', function () {
  it('1 + 2 = 3', function () {
    expect(add(1, 2)).to.be.equal(3)
  })

  it('0 + 1000 = 1000', function () {
    expect(add(0, 1000)).to.be.equal(1000)
  })
})
