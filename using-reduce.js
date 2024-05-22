function adder(tableau, initial = 0) {
    return tableau.reduce(function(somme, courant) {
        return somme + courant;
    }, initial);
}

function sumOrMul(tableau, initial = 0) {
    return tableau.reduce(function(resultat, courant) {
        if (courant % 2 === 0) {
            return resultat * courant;
        } else {
            return resultat + courant;
        }
    }, initial);
}

function funcExec(fonctions, initial) {
    return fonctions.reduce(function(resultat, fonction) {
        return fonction(resultat);
    }, initial);
}
