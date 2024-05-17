function floor(nombre) {
    if (nombre >= 0) {
        let result = 0;
        while (nombre >= 1) {
            nombre -= 1;
            result += 1;
        }
        return result;
    } else {
        let result = 0;
        while (nombre < 0) {
            nombre += 1;
            result -= 1;
        }
        return result - 1;
    }
}


function round(nombre) {
    let floorValue = floor(nombre);
    let diff = nombre - floorValue;
    if (diff < 0.5) {
        return floorValue;
    } else {
        return floorValue + 1;
    }
}


function ceil(nombre) {
    let floorValue = floor(nombre);
    if (nombre > floorValue) {
        return floorValue + 1;
    } else {
        return floorValue;
    }
}

function trunc(nombre) {
    if (nombre >= 0) {
        let result = 0;
        while (nombre >= 1) {
            nombre -= 1;
            result += 1;
        }
        return result;
    } else {
        let result = 0;
        while (nombre < 0) {
            nombre += 1;
            result -= 1;
        }
        return result;
    }
}

console.log(round(-3))