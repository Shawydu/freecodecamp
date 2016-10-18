// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), 
// payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
// Return the string "Closed" if cash-in-drawer is equal to the change due.
// Otherwise, return change in coin and bills, sorted in highest to lowest order.


function checkCashRegister(price, cash, cid) {
  var result = [];
  // Corresponding order amout of currency
  var curr = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  // toFixed method would return a string representing the number, '+' sign would convert string into number type
  var change = +(cash - price).toFixed(2);
  // Here is your change, ma'am.
  var sum = 0;
  cid.forEach(function(arr) {
    sum += arr[1];
  });
  sum = +sum.toFixed(2);
  if (sum === change) {
    return "Closed";
  } else if (sum < change) {
    return "Insufficient Funds";
  } else {
    for (var i = cid.length - 1; i >= 0; i--) {
      var currAmount = cid[i][1].toFixed(2);
      var numOfOrder = Math.floor(change / curr[i]);
      if (numOfOrder > 0) {
        if (numOfOrder > currAmount / curr[i]) {
          change = (change - currAmount).toFixed(2);
          result.push([cid[i][0], +currAmount]);
        } else {
          change = (change - curr[i] * numOfOrder).toFixed(2);
          result.push([cid[i][0], +(curr[i] * numOfOrder).toFixed(2)]);
        }
      }
    }
    if (change > 0) {
      return "Insufficient Funds";
    } else {
      return result;
    }
  }
}


checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
