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

// CETTE FONCTION AUSSI A REVOIR JE COMPRENDS PAS MON ERREUR JE L'AI PASTE
function tempForecasts(arr) {
    return arr.map((item) => {
        return `${
            Math.floor(
                (Number(item.temperature.slice(0, -2)) - 32) * (5 / 9)
            ).toString() + "°Celsius"
        } in ${item.city}, ${item.state
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")}`;
    });
}

// function a revoir je comprebnds pas l'erreur reponse de gpt :
function trimTemp(arr) {
    return arr.map((item) => {
        item.temperature = item.temperature.replaceAll(" ", "");
        return item;
    });
}