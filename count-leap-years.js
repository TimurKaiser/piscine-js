function isLeapYear(year) {
    let flag = false;

    if (year % 4 === 0) {
        flag = true;
    }
    if (year % 100 === 0) {
        flag = false;
    }
    if (year % 400 === 0) {
        flag = true;
    }

    return flag;
}

function countLeapYears(date) {
    let count = 0;
    const currentYear = date.getFullYear();

    for (let year = currentYear; year > 0; year--) {
        if (isLeapYear(year)) {
            count++;
        }
    }

    return count;
}
