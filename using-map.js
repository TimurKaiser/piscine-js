function citiesOnly(ville) {
    let array = ville.map(cities => {
        return cities.city
    });
    return array
}

function upperCasingStates(cities) {
    const regex = /\b\w/g;
    return states.map(state => state.replace(regex, match => match.toUpperCase()));
}

function fahrenheitToCelsius(degrees) {
    let array = degrees.map(temperature => {
        const degrees = parseFloat(temperature);
        const convert = (degrees - 32) * 5 / 9;

        return  '${convert}°C';
    });
}


function trimTemp(arr) {
    const spaceRegex = /\s+/g;

    return arr.map(obj => {
        const trimmedTemperature = obj.temperature.replace(spaceRegex, '');
        return {
            city: obj.city,
            temperature: trimmedTemperature
        };
    });
}

const spaceRegex = /\s+/g;

function trimTemp(arr) {
    return arr.map(obj => {
        const trimmedTemperature = obj.temperature.replace(spaceRegex, '');

        return {
            ...obj, temperature: trimmedTemperature
        };
    });
}
