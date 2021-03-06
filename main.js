//npm init -- need to use for lodash to work in terminal??
// npm i lodash -- need to use for lodash to work in terminal
// npm install node-fetch -- need to run fetch for json data

const _ = require('lodash');


// Required: at least 5 functions for terminal and console.log() each result
// Required methods: _.chunk(), _.reverse(), _.without(), _.shuffle().
// Required to make unit tests with Mocha for each function built


// Installs Lodash in Node.js:

// Load the full build.
// var _ = require('lodash');
// // Load the core build.
// var _ = require('lodash/core');
// // Load the FP build for immutable auto-curried iteratee-first data-last methods.
// var fp = require('lodash/fp');

// // Load method categories.
// var array = require('lodash/array');
// var object = require('lodash/fp/object');

// // Cherry-pick methods for smaller browserify/rollup/webpack bundles.
// var at = require('lodash/at');
// var curryN = require('lodash/fp/curryN');

// //Calls on API for fake data:
// function getData() {fetch('https://jsonplaceholder.typicode.com/todos/').then(response => response.json())
//   .then(json => console.log(json))
// }
// getData()

// Functions:

module.exports = {
  zipLodash: function(){
    let letters = ['a', 'b', 'c', 'd', 'e', 'f']
    let greek = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot']
    let zipArrays = _.zip((letters, greek))
    return zipArrays()
  },

  chunckLodash: function(){
    const chunkyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let chunk1=    _.chunk(chunkyNums, 2)
    return (chunk1);
  },

  rangeLodash: function() {
    return _.range(4)
  },
  
  shuffleLodash: function() {
    let nums = [16, 882, 31, 488, 34, 56, 423, 54656, 45649];
    let shuffleNums = _.shuffle(nums)
    return shuffleNums
  },

  withoutLodash: function() {
    return _.without(['Ramones', 'Beatles', 'Rush', 'Beach_Boys'], 'Ramones', 'Beatles')
  },

  reverseLodash: function () {
    let phrases = ['hi_friends', 'hola_amigos', 'hand_ten', 'cool_dude'];
    let reversePhrases = _.reverse(phrases)
    return reversePhrases
  },
  

}

// const greek = _.zip(['a', 'b', 'c', 'd', 'e', 'f'], ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot']);
// console.log(greek)


  // CHUNK METHOD:
// creates an array of elements split into groups the length of the specified size

// const chunkyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let chunk1=    _.chunk(chunkyNums, 2)
//     return (chunk1);

//     let chunk2 = _.chunk(chunkyNums, 3);
//         console.log(chunk2);


        // REDUCE METHOD:
// return a new object with people grouped by age and only for people between 18-59. 
// must return result at the end of the function
// must specify the default value for result for third argument (line: ___ {})

// let people = [
//   { name: "Qwilleran", age: 6 },
//   { name: "Seamus", age: 2 },
//   { name: "Scott", age: 26 },
//   { name: "Dominik", age: 27 },
//   { name: "Eddie", age: 30 }
// ]

// let reducedpeople = _.reduce(people, function (result, people) {
//   if(user.age >= 18 && user.age <= 59) {
//       (result[people.age] || (result[people.age] = [])).push(people);
//   }

//   return result;
// }, {});

//************************************************************ */

//_.without()
//Creates an array excluding all given values using SameValueZero for equality comparisons.
//Unlike _.pull, this method returns a new array.
//_.without([2, 1, 2, 3], 1, 2);
// => [3]

//****************************************** */
//_.shuffle()
// creates an array of shuffled values from the given collection using a version of the Fisher-Yates shuffle algorithm.
//Syntax:

// _.shuffle( collection )
// Parameters: This method accepts single parameter as mentioned above and described below:

// collection: This parameter holds the collection to shuffle.
// Return Value: This method is used to return the new shuffled array.
//
//


//***************************************

// Unit Tests:




// CODE ALONG WITH YOUTUBE TUTORIAL- ON ZOLLEGE



