function isFriday(date) {
    if (date.getDay() === 5) {
      return true;
    } else {
      return false;
    }
}
  
function isWeekend(date) {
    const day = date.getDay();
    if (day === 6 || day === 0) {
      return true;
    } else {
      return false;
    }
}
  
function isLeapYear(date) {
    const year = date.getFullYear();
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
}
  
function isLastDayOfMonth(date) {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    if (nextDay.getDate() === 1) {
      return true;
    } else {
      return false;
    }
}
  