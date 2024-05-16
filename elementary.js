function multiply(a, b) {
    resultMul = 0;
    for (let i = 0; i < a; i++ ) {
        resultMul = resultMul + b
    }
    return resultMul
}
function divide(a, b) {
    let quotient = 0;
    while ( a >= b) {
        a = a - b
        quotient++
    }
    return quotient;
}
function modulo(a, b) {
    let reste = 0;
    while ( a >= b) {
        a = a - b;
    }
    return a
}