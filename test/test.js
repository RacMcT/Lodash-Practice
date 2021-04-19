const assert = require('chai').assert;
const chunk = require('../main').chunkLodash;
const shuffle = require('../main').shuffleLodash;
const reverse = require('../main').reverseLodash;
const range = require('../main').rangeLodash;
const without = require('../main').withoutLodash;


describe('test', function(){
  it('should return a divided  2D array', function() {
    assert.equal(chunk()[0].length, 2)
  }),

  it('should return an array other than the passed array of numbers', function() {
    assert.notEqual(shuffle(), [16, 882, 31, 488, 34, 56, 423, 54656, 45649])
  }),
  it('should return an array with the string chicken', function() {
    assert.equal(without(), 'Beach_Boys')
  }),
//passed array was: 'hi_friends', 'hola_amigos', 'hang_ten', 'cool_dude'
  it('should reverse array', function() {
    assert.deepEqual(reverse(), ['cool_dude', 'hang_ten', 'hola_amigos', 'hi_friends'])
  })
  it('return a range of numbers from 0 to 4', function() {
    assert.deepEqual(range(), [0, 1, 2, 3])
  })
})