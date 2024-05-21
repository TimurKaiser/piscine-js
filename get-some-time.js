function firstDayWeek(numWeek, yearString) {
    let startYear = new Date(yearString + "-01-01");
    let mondayCount = 0;

    while (startYear.getDay() !== 1) {
        startYear.setDate(startYear.getDate() + 1);
    }
    mondayCount = 1;

    if (numWeek === 1) {
        return formatDate(startYear);
    }

    while (mondayCount < numWeek) {
        startYear.setDate(startYear.getDate() + 7);
        mondayCount++;
    }

    return formatDate(startYear);
}

function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear().toString();

    if (year.length < 4) {
        year = year.padStart(4, '0');
    }

    //formate a jj-mm-aa
    let formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;

    return formattedDate;
}