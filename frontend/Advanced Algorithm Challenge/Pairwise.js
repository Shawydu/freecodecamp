// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// If multiple pairs are possible that have the same numeric elements but different indices, 
// return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

// For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

// Index	0	1	2	3	4
// Value	7	9	11	13	15
// Below we'll take their corresponding indices and add them.

// 7 + 13 = 20 → Indices 0 + 3 = 3
// 9 + 11 = 20 → Indices 1 + 2 = 3
// 3 + 3 = 6 → Return 6

function pairwise(arr, arg) {
  var indices = 0, arrayIndex=[];
  var sumIndices = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg && i !== j) {
        if(arrayIndex.indexOf(i) === -1 && arrayIndex.indexOf(j) === -1) {
          indices = i + j;
          arrayIndex.push(i, j);
        }
      }
    }
    sumIndices += indices;
    indices = 0;
  }
  return sumIndices;
}

pairwise([0, 0, 0, 0, 1, 1], 1);
