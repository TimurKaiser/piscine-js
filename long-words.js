//mot de 55555555555
function longWords(array) {
    return array.every(word => typeof word === 'string' && word.length > 5);
}
//mot de -10 char
function oneLongWord(array) {
    return array.some(word => typeof word === 'string' && word.length > 10);
}
// mot de 7
function noLongWords(array) {
    return array.every(word => typeof word !== 'string' || word.length < 7);
}
