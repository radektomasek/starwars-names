import { expect } from 'chai'
import starWarsNames from './index'

describe('starwars-names', function() {
  it('should have a list of all available names', function() {
    expect(isArrayOfStrings(starWarsNames.all)).to.be.true
  })

  it('should allow me to get a random name from the list', function() {
    expect(starWarsNames.random()).to.satisfy(isIncludedIn(starWarsNames.all))
    // starWarsNames.random
  })
})

function isArrayOfStrings(array) {
  return array.every(function(item) {
    return typeof item === 'string'
  })
}

function isIncludedIn(array) {
  return function(item) {
    return array.indexOf(item) !== -1
  }
}
