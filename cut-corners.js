function floor(nombre) {
    if (nombre >= 0) {
        while (nombre >= 1) {
            nombre -= 1;
        }
        return nombre + 1;
    } else {
        while (nombre < 0) {
            nombre += 1;
        }
        return nombre - 1;
    }
}


function round(nombre) {
    let temp = floor(nombre);
    let diff = nombre - temp;
    if (diff < 0.5) {
        return temp;
    } else {
        return temp + 1;
    }
}



function ceil(nombre) {
    let temp = floor(nombre);
    if (nombre > temp) {
        return temp + 1;
    } else {
        return temp;
    }
}

function trunc(nombre) {
    if (nombre >= 0) {
        while (nombre >= 1) {
            nombre -= 1;
        }
        return nombre + 1;
    } else {
        while (nombre < 0) {
            nombre += 1;
        }
        return nombre - 1;
    }
}


