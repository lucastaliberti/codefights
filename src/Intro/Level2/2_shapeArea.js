/*
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

  _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_
  _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|■|_|_|_|_
  _|_|_|_|_|_|_|_|_|■|_|_|_|_|_|■|■|■|_|_|_
  _|_|_|_|■|_|_|_|■|■|■|_|_|_|■|■|■|■|■|_|_
  _|■|_|■|■|■|_|■|■|■|■|■|_|■|■|■|■|■|■|■|_
  _|_|_|_|■|_|_|_|■|■|■|_|_|_|■|■|■|■|■|_|_
  _|_|_|_|_|_|_|_|_|■|_|_|_|_|_|■|■|■|_|_|_
  _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|■|_|_|_|_
   | | | | | | | | | | | | | | | | | | | | 
   n=1   n=2       n=3           n=4

Example

For n = 2, the output should be
shapeArea(n) = 5;
For n = 3, the output should be
shapeArea(n) = 13.
Input/Output

[time limit] 4000ms (js)
[input] integer n

Guaranteed constraints:
1 ≤ n < 104.

[output] integer

The area of the n-interesting polygon.
*/
'use strict';
var expect = require('chai').expect;

function shapeArea(n) {
  if (n === 1)
    return 1
  else
    return (n * n) + ((n - 1) * (n - 1))
}

describe('Intro Level2 - shapeArea', function () {

  const tests = [
    { input: 2, expected: 5 },
    { input: 3, expected: 13 },
    { input: 1, expected: 1 },
    { input: 5, expected: 41 }
  ]

  tests.map((v) => {
    it(`input: ${v.input}`, function () {
      expect(shapeArea(v.input)).to.be.equal(v.expected);
    })
  })
})
