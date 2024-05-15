function sign(number) {
    if (number > O) {
        return 1;
    }
    if (number < 0) {
        return -1;
    } else {
        return 0;
    }
}

function sameSign(number1, number2) {
    if (sign(number1) === sign(number2)) { // operateur de comparaison a revoir
        return true
    } else {
        return false
    }
}