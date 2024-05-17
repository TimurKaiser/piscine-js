function round(number) {
    let negative = false;
    if (number < 0) {
        negative = true;
        number = -number;
    }
    let count = 0;
    while (!(number < 1 && number > -1)) {
        number -= 1;
        count++;
    }
    if (number < 0.5) {
        if (negative) {
            return -count;
        } else {
            return count;
        }
    } else {
        if (negative) {
            return -count - 1;
        } else {
            return count + 1;
        }
    }
}

function floor(number) {
    let negative = false;
    if (number < 0) {
        negative = true;
        number = -number;
    }
    let numberCopy = number;
    let count = 0;
    while (!(numberCopy < 1 && numberCopy > -1)) {
        numberCopy -= 1;
        count++;
    }
    if (negative) {
        return -count - 1;
    } else {
        return count;
    }
}

function ceil(number) {
    if (!number) return 0;
    let negative = false;
    if (number < 0) {
        negative = true;
        number = -number;
    }
    let numberCopy = number;
    let count = 0;
    while (!(numberCopy < 1 && numberCopy >= 0)) {
        numberCopy -= 1;
        count++;
    }
    if (negative) {
        return -count;
    } else {
        return count + 1;
    }
}

function trunc(number) {
    let count = 0;
    if (number > 0xfffffffff) {
        number -= 0xfffffffff;
        count += 0xfffffffff;
    }
    let negative = false;
    if (number < 0) {
        negative = true;
        number = -number;
    }
    let numberCopy = number;
    while (!(numberCopy < 1 && numberCopy > -1)) {
        numberCopy -= 1;
        count++;
    }
    if (negative) {
        return -count;
    }
    return count;
}