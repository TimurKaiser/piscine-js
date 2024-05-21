// on change juste dr strange

function sunnySunday(date) {
    const baseDate = new Date('0001-01-01');
    const dayDifference = Math.floor((date - baseDate) / (1000 * 60 * 60 * 24));
    const newWeekDay = dayDifference % 6;
    const days = [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    
    return days[newWeekDay];
}

function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date);
    
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(second);
    
    return newDate;
}
