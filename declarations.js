// pas besoin de mettre le ; a la fin mais vaut mieux le mettre a chaque fin de déclaration
const escapeStr = "` \\ / \" '";
const arr = [4, '2'];


//méthode 1 pour le structure d'objet
const obj = {
    str: "blabla",
    num: 3,
    bool: true,
    undef: undefined,
};



const nested = {
    arr: [4, undefined, '2'], // la virgule ici sert a séparer les lignes entre les objects
    obj: {str: "test", num: 3, bool: true } // méthode 2
};

Object.freeze(nested)
Object.freeze(nested.obj) // il faut aussi freeze les objets dans les objets
Object.freeze(nested.arr) // il faut tout freeze ??
