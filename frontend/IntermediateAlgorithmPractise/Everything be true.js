function truthCheck(collection, pre) {
  // Is everyone being true?
  // NaN is a very special falsy element
  var falsy = [false, null, undefined, 0, '', ""];
  var count = 0;
  collection.forEach(function(pair){
    // Boolean() in case of NaN condition
    if (falsy.indexOf(pair[pre]) === -1 && Boolean(pair[pre])) {
      count++;
    }
  });

  if (count == collection.length) {
    return true;
  } else {
    return false;
  }
  
}