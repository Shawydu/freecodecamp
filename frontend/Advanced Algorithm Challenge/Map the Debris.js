// Return a new array that transforms the element's average altitude into their orbital periods.

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.


function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var result = [];
  arr.forEach(function(obj, index, array) {
    var orbitRadius = earthRadius + obj.avgAlt;    
    var t = Math.round(2 * Math.PI * Math.pow(Math.pow(orbitRadius, 3) / GM, 1/2));
    result.push({name: obj.name, orbitalPeriod: t});
  });
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
