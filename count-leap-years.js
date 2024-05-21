function countLeapYears(date) {
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    let count = 0;
    const currentYear = date.getFullYear();

    // Compte années bissextiles depuis 1 jusqu'à l'année -1 à celle donner
    for (let year = 1; year < currentYear; year++) {
        if (isLeapYear(year)) {
            count++;
        }
    }

    return count;
}
