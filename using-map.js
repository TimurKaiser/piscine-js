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

function trimTemp(arr) {
    const spaceRegex = /\s+/g;
    return arr.map(obj => ({
        city: obj.city,
        temperature: obj.temperature.replace(spaceRegex, '')
    }));
}

function tempForecasts(arr) {
    return arr.map(obj => {
        const celsius = fahrenheitToCelsius([obj.temperature])[0];
        const state = upperCasingStates([obj.state])[0];
        return `${celsius} in ${obj.city}, ${state}`;
    });
}
