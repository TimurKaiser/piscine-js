function isNum(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

function isNan(value) {
    if (typeof value === 'number' && isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

function isStr(value) {
    if (typeof value === 'string') {
        return true;
    } else {
        return false;
    }
}

function isBool(value) {
    if (typeof value === 'boolean') {
        return true;
    } else {
        return false;
    }
}

function isUndef(value) {
    if (typeof value === 'undefined') {
        return true;
    } else {
        return false;
    }
}

function isDef(value) {
    if (typeof value === 'undefined') {
        return false;
    } else {
        return true;
    }
}

function isArr(value) {
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
}

function isObj(value) {
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
        return true;
    } else {
        return false;
    }
}

function isFun(value) {
    if (typeof value === 'function') {
        return true;
    } else {
        return false;
    }
}

function isTruthy(value) {
    if (value) {
        return true;
    } else {
        return false;
    }
}

function isFalsy(value) {
    if (!value) {
        return true;
    } else {
        return false;
    }
}
