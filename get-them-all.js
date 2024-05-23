//const allpeople = document.querySelectorAll('body > *') ou de cette maniere
// syntaxe complique mais trop fort 
// pour comprendre dom : https://blog.codewise.fr/javascript-manipulation-dom


function getArchitects() {
    return [
        document.querySelectorAll("body a"),
        document.querySelectorAll("body span"),
    ];
}

function getClassical() {
    return [
        document.querySelectorAll("a.classical"),
        document.querySelectorAll("a:not(.classical)"),
    ];
}

function getActive() {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ];
}

function getBonannoPisano() {
    return [
        document.getElementById("BonannoPisano"),
        document.querySelectorAll("a.classical.active"),
    ];
}

export {
    getArchitects,
    getClassical,
    getActive,
    getBonannoPisano,
}