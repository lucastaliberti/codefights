/*
Score: 300/300
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

Input/Output

[time limit] 4000ms (js)
[input] array.integer inputArray

An array of integers containing at least two elements.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.

[output] integer

The largest product of adjacent elements.
*/
'use strict';
var expect = require('chai').expect;

function adjacentElementsProduct(inputArray) {
  const arr = inputArray.map((val, i, arr) => {
    if (i > 0) {
      return val * arr[i - 1];
    }
  }).filter((v) => v !== undefined)

  return Math.max(...arr);
}

describe('Intro Level2 - adjacentElementsProduct', function () {

  let inputArray = [3, 6, -2, -5, 7, 3]
  let expected = 21
  it(`inputArray: ${inputArray}`, function () {
    expect(adjacentElementsProduct(inputArray)).to.be.equal(expected);
  })

  inputArray = [-1, -2]
  expected = 2
  it(`inputArray: ${inputArray}`, function () {
    expect(adjacentElementsProduct(inputArray)).to.be.equal(expected);
  })

  inputArray = [5, 1, 2, 3, 1, 4]
  expected = 6
  it(`inputArray: ${inputArray}`, function () {
    expect(adjacentElementsProduct(inputArray)).to.be.equal(expected);
  })

  inputArray = [1, 2, 3, 0]
  expected = 6
  it(`inputArray: ${inputArray}`, function () {
    expect(adjacentElementsProduct(inputArray)).to.be.equal(expected);
  })

  inputArray = [9, 5, 10, 2, 24, -1, -48]
  expected = 50
  it(`inputArray: ${inputArray}`, function () {
    expect(adjacentElementsProduct(inputArray)).to.be.equal(expected);
  })

  inputArray = [5, 6, -4, 2, 3, 2, -23]
  expected = 30
  it(`inputArray: ${inputArray}`, function () {
    expect(adjacentElementsProduct(inputArray)).to.be.equal(expected);
  })

  inputArray = [4, 1, 2, 3, 1, 5]
  expected = 6
  it(`inputArray: ${inputArray}`, function () {
    expect(adjacentElementsProduct(inputArray)).to.be.equal(expected);
  })

  inputArray = [-23, 4, -3, 8, -12]
  expected = -12
  it(`inputArray: ${inputArray}`, function () {
    expect(adjacentElementsProduct(inputArray)).to.be.equal(expected);
  })
})