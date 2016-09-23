// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
  // check if an object is number type
  var checkNum = function(num) {
    return typeof num === 'number' ? true : false;
  };
  
  // two arguments
  if (arguments.length > 1) {
    var a = arguments[0];
    var b = arguments[1];
    if (checkNum(a) && checkNum(b)) {
      return a + b;
    } else {
      return undefined;
    }
  } else { // one argument
    var c = arguments[0];
    if (checkNum(c)) {
      return function (arg) {
        if (checkNum(c) && checkNum(arg)) {
          return c + arg;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  }
}