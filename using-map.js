function citiesOnly(arr) {
    return arr.map(obj => obj.city);
}

function upperCasingStates(states) {
    const regex = /\b\w/g;
    return states.map(state => state.replace(regex, match => match.toUpperCase()));
}

function fahrenheitToCelsius(degrees) {
    return degrees.map(temperature => {
        const fahrenheit = parseFloat(temperature);
        const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
        return `${celsius}°C`;
    });
}


// function a revoir je comprebnds pas l'erreur reponse de gpt :
function trimTemp(arr) {
    return arr.map((item) => {
        item.temperature = item.temperature.replaceAll(" ", "");
        return item;
    });
}