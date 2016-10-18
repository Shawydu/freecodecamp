// Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
// Assume that all characters in the provided string are each unique.

// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
// but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

function permAlone(str) {
  var reg = /(.)\1+/g;
  var arr = str.split('');
  var permutations = [];
  function swap (index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  function permute (num) {
    if (num === 1) {
      permutations.push(arr.join(''));
      return;
    } else {
      for (var i = 0; i < num; i++) {
        permute(num - 1);
        swap(num % 2 ? 0 : i, num - 1);
      }
    }
  }
  var length = arr.length;
  permute(length);
  var result = permutations.filter(function(str) {
    return !str.match(reg);
  });
  return result.length;
}