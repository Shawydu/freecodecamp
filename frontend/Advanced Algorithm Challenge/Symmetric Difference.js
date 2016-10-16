// Create a function that takes two or more arrays and 
// returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and 
// set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is 
// the set of elements which are in either of the two sets, 
// but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take 
// (say on a set D = {2, 3}), you should get the set with elements which are in either of 
// the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

function sym(args) {
  // convert Arguments object to array type
  var argsArr = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
  // Array.reduce gets result
  var diff = argsArr.reduce(function(arr1, arr2) {
    // return the arr1 elements which are different from arr2
    return arr1.filter(function(val) {
      return arr2.indexOf(val) === -1;
    }).concat(arr2.filter(function(val) { // combine the arr2 elements which is different from arr1
      return arr1.indexOf(val) === -1;
    })).filter(function(val, index, array) { // make result array unique
      return array.indexOf(val) === index;
    });
  });
  return diff;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
