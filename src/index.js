'use strict'

var uniqueRandomArray = require('unique-random-array')
var starWarsNames = require('./starwars_names.json')

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
  test: test
}

function test() {
  return "abc"
}