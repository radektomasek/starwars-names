import uniqueRandomArray from 'unique-random-array'
const starWarsNames = require('./starwars_names.json')

export default {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
}