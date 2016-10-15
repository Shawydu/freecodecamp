// Validate US Telephone Numbers
// Return true if the passed string is a valid US phone number.

// The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

// this challenge can be seperated into several steps
// initial Regex should match certain nunber of digits
var reg = /\d{3}\d{3}\d{4}/;

// next, the first 3 digits maybe contained with curly braces
var reg = /(\(\d{3}\)|\d{3})\d{3}\d{4}/;

// next, there maybe '-' or space between pairs of digits
var reg = /(\(\d{3}\)|\d{3})[\s\-]\d{3}[\s\-]\d{4}/;

// next, the phone number may begin with 1
var reg = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]\d{3}[\s\-]\d{4}/;

// finally, the phone number must end with last pair of 4 digits
function telephoneCheck(str) {
  // Good luck!
  var reg = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
//   var reg = /\d{3}\d{3}\d{4}/;
  return reg.test(str);
}