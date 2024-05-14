// pas besoin de mettre le ; a la fin mais vaut mieux le mettre a chaque fin de déclaration
const escapeStr = "`\"'/";
const arr = [4, '2'];


//méthode 1 pour le structure d'objet
const obj = {
    str: "blabla",
    num: 3,
    bool: true,
    undef: undefined,
};

Object.freeze(obj)



const nested = {
    arr: [4, undefined, '2'], // la virgule ici sert a séparer les lignes entre les objects
    obj: {str: "test", num: 3, bool: true } // méthode 2
};

Object.freeze(nested)