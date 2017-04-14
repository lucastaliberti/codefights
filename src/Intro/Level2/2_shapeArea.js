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

  let input = 2
  let expected = 5
  it(`input: ${input}`, function () {
    expect(shapeArea(input)).to.be.equal(expected);
  })

  input = 3
  expected = 13
  it(`input: ${input}`, function () {
    expect(shapeArea(input)).to.be.equal(expected);
  })

  input = 1
  expected = 1
  it(`input: ${input}`, function () {
    expect(shapeArea(input)).to.be.equal(expected);
  })

  input = 5
  expected = 41
  it(`input: ${input}`, function () {
    expect(shapeArea(input)).to.be.equal(expected);
  })

})
