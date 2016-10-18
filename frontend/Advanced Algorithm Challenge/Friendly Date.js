// Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

// The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

// Do not display information that is redundant or that can be inferred by the user: 
// if the date range ends in less than a year from when it begins, do not display the ending year.

// Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, 
// the year should not be displayed at the beginning of the friendly range.

// If the range ends in the same month that it begins, do not display the ending year or month.

// Examples:

// makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

// makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].


function makeFriendlyDates(arr) {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var start = arr[0].split('-'), startStr = '';
  var end = arr[1].split('-'), endStr = '';
  var result = [];
  function toNum(str) {
    return +str;
  }
  // convert to readable day formant
  function dayFormat(day) {
    switch (day) {
      case 1:
      case 21:
        return day + 'st';
      case 2:
      case 22:
        return day + 'nd';
      case 3:
      case 23:
        return day + 'rd';
      default:
        return day + 'th';
    }
  }
  start = start.map(toNum);
  end = end.map(toNum);
  var startYear = start[0], startMonth = start[1], startDay = start[2];
  var endYear = end[0], endMonth = end[1], endDay = end[2];
  // ending date equals to starting date
  if (arr[0] === arr[1]) {
    result.push(months[startMonth - 1] + ' ' + dayFormat(startDay) + ', ' + startYear);
    return result;
  }
  startStr += months[startMonth - 1] + ' ' + dayFormat(startDay);
  if (endYear === startYear) {
    if (startYear !== 2016) {
      startStr += ', ' + startYear; 
    }
    if (endMonth === startMonth ) {
      endStr += dayFormat(endDay); // two dates within a month, just output ending day
    } else {
      endStr += months[endMonth - 1] + ' ' + dayFormat(endDay);
    }
  } else if (endYear - startYear === 1) {
    if (endMonth === startMonth && endDay < startDay || endMonth < startMonth) { // within one year
      endStr += months[endMonth - 1] + ' ' + dayFormat(endDay);
      if (startYear !== 2016) {
        startStr += ', ' + startYear;        
      }
    } else if (endMonth >= startMonth) { // exceed one year
      startStr += ', ' + startYear;
      endStr += months[endMonth - 1] + ' ' + dayFormat(endDay) + ', ' + endYear;
    }
  } else if (endYear - startYear > 1) { // exceed one year
    startStr += ', ' + startYear;
    endStr += months[endMonth - 1] + ' ' + dayFormat(endDay) + ', ' + endYear;
  }

  result.push(startStr, endStr);
  return result;
}

makeFriendlyDates(["2016-12-01", "2017-02-03"]);
