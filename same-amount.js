function sameAmount(string, regular1, regular2) {
    let oui = string.split(regular1).length;
    let non = string.split(regular2).length;
    return oui == non
}