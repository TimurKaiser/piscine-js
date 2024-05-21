function firstDayWeek(numWeek, yearString) {
    let startYear = new Date(yearString + "-01-01") 
    let mondayCount = 1;

    if (mondayCount === numWeek) {
        return formatDate(startYear) 
    }

    while (mondayCount < numWeek) {
        startYear.setDate(startYear.getDate() + 1);
        if (startYear.getDay() === 1) { 
            mondayCount++;
        }
        if (mondayCount === numWeek) {
            return formatDate(startYear); 
        }
    }
}



function formatDate(dateString) {
    let date = new Date(dateString);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear().toString();

    if (year.length < 4) {
        year = year.padStart();
    }

    // formate la date a une bonne version jj--mm-aaaa
    let formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;

    return formattedDate;
}