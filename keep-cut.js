function cutFirst(string) {
    let result = string.substring(2);
    return result;
}

function cutLast(string) {
    let result = string.substring(0, string.length - 2);
    return result;
}

function cutFirstLast(string) {
    let temp = string.substring(2);
    let result = temp.substring(0, temp.length - 2);
    return result;
}

function keepFirst(string) {
    let result = string.substring(0, 2);
    return result;
}

function keepLast(string) {
    let result = string.substring(string.length - 2);
    return result;
}

function keepFirstLast(string) {
    let temp = string.substring(0, 2);
    let result = temp + string.substring(string.length - 2);
    return result;
}
