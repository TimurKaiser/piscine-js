function floor(nombre) {
    let result = nombre;
    if (nombre >= 0) {
        while (nombre >= 1) {
            nombre -= 1; // soustrait du nombre 1 jusqu'à atteindre 0
        }
        let temp = nombre;
        result = result - temp;
        return result
    }
    while (nombre <= 0) {
        nombre += 1;
    }
    let temp =  nombre - 1;
    result = result - temp
    return result
}

function round(nombre) {
    let temp = floor(nombre);
    let diff = nombre - temp;
    if (diff < 0.5) {
        return temp
    } else {
        let result = nombre + (1 - diff);
        return result
    }
}


function ceil(number) {
    if (number > 0) {
        let temp = floor(number);
        let diff = number - temp;
        let result = number + diff;
        return result
    } else {
        return round(number)
    }
}

function trunc(number) {
    return round(number)
}

console.log(round(-4,6))


