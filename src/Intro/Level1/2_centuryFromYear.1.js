/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.
Input/Output

[time limit] 4000ms (js)
[input] integer year

A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.

[output] integer

The number of the century the year is in.
*/
'use strict'
var expect = require('chai').expect

function centuryFromYear (year) {
  return Math.ceil(year / 100)
}

describe('Intro Level1 - centuryFromYear', function () {
  it('year: 1905 century: 20', function () {
    expect(centuryFromYear(1905)).to.be.equal(20)
  })

  it('year: 1700 century: 17', function () {
    expect(centuryFromYear(1700)).to.be.equal(17)
  })
})
