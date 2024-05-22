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


function tempForecasts(arr) {
    return arr.map(obj => {
        const celsius = fahrenheitToCelsius([obj.temperature])[0];
        return `${celsius} in ${obj.city}, ${obj.state}`;
    });
}


// function a revoir je comprebnds pas l'erreur reponse de gpt :
function trimTemp(arr) {
    return arr.map((item) => {
        item.temperature = item.temperature.replaceAll(" ", "");
        return item;
    });
}