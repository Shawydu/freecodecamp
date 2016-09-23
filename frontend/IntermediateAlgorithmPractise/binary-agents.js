// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
function binaryAgent(str) {
  var barr = str.split(' ');
  var pos = 0, code = 0, length = 0, digits = 0;
  var charCode = 0;
  var result = '';

  barr.forEach(function(binary, index) {
    length = binary.length;
    pos = binary.indexOf('1');
    charCode = 0; // reset charCode
    
    // find any '1's appear in string, record their digits
    while (pos !== -1) {
      digits = length - pos - 1;
      charCode += Math.pow(2, digits);
      pos = binary.indexOf('1', pos + 1);
    }
    result += String.fromCharCode(charCode);
  });
  return result;
}