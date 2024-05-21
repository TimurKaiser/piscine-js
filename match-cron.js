function matchCron(cron, date) {
    let arr = cron.split(' ');
    let minute = arr[0];
    let hour = arr[1];
    let dayOfMonth = arr[2];
    let month = arr[3];
    let dayWeek = arr[4];

    if (minute !== '*' && minute != date.getMinutes()) {
        return false;
    }

    if (hour !== '*' && hour != date.getHours()) {
        return false;
    }

    if (dayOfMonth !== '*' && dayOfMonth != date.getDate()) {
        return false;
    }

    if (month !== '*' && month != date.getMonth() + 1) {
        return false;
    }

    let dayOfWeek = date.getDay();
    dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek; // Convertire dimanche de 0 à 7

    if (dayWeek !== '*' && Number(dayWeek) !== dayOfWeek) {
        return false;
    }

    return true;
}