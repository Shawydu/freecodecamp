// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
// Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array. 
// The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var exist, i; 

  // loop arr1 finding elements in arr2 should match with arr1
  arr1.forEach(function(arr, index, array) {
    exist = arr2.find(function(target) {
      return arr[1] === target[1];
    });
    if (exist) {
      i = arr2.indexOf(exist);
      array[index][0] += exist[0];
      arr2.splice(i, 1); // delete items in arr2 which exists in arr1
    }
  });
  arr1 = arr1.concat(arr2).sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });
  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];