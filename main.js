
// Required: at least 5 functions for terminal and console.log() each result
// Required methods: _.chunk(), _.reverse(), _.without(), _.shuffle().
// Required to make unit tests with Mocha for each function built


// Installs Lodash in Node.js:

// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');


// Functions:


const greek = _.zip(['a', 'b', 'c', 'd', 'e', 'f'], ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot']);
console.log(greek)


  // CHUNK METHOD:
// creates an array of elements split into groups the length of the specified size

let chunkyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        let chunk1 = _.chunk(chunkyNums, 2);
        console.log(chunk1);

        let chunk2 = _.chunk(chunkyNums, 3);
        console.log(chunk2);


        // REDUCE METHOD:
// return a new object with people grouped by age and only for people between 18-59. 
// must return result at the end of the function
// must specify the default value for result for third argument (line: ___ {})

let people = [
  { name: "Qwilleran", age: 6 },
  { name: "Seamus", age: 2 },
  { name: "Scott", age: 26 },
  { name: "Dominik", age: 27 },
  { name: "Eddie", age: 30 }
]

let reducedpeople = _.reduce(people, function (result, people) {
  if(user.age >= 18 && user.age <= 59) {
      (result[people.age] || (result[people.age] = [])).push(people);
  }

  return result;
}, {});




// Unit Tests:


