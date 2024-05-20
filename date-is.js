function isValid(date) {
    if(isNaN(date)) {
        return false
    } else {
        return true
    }
}

function isAfter(date1, date2) {
    if(date1 > date2) {
        return true
    } else {
        return false
    }
}       


function isBefore(date1, date2) {
    if(date1 > date2) {
        return false
    } else {
        return true
    }
}


function isFuture(date1) {
    let  date2 = new Date();
    let result = date1 - date2;
    if(result > O) {
        return true;
    } else {
        return false;
    }
}


function isPast(date1) {
    let date2 = new Date();
    let result = date1 - date2
    if(result > 0) {
        return false
    } else {
        return true
    }
    
}