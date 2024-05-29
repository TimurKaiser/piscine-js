// il faut verifier le type de donné
var is = {
    arr: (n) => Array.isArray(n),
    obj: (n) =>
        typeof n === 'object' && n !== null && !is.arr(n) && !is.fun(n) && !(n instanceof RegExp),
    fun: (n) => typeof n === 'function'
};

function replica(target, ...sources) {
    sources.forEach((source) => {
        // Parcourir chaque clé dans l'objet source
        Object.keys(source).forEach((key) => {
            // Si la valeur est un objet, on fait un merge récursif (merge recursif = combiner deux objet en un)
            if (is.obj(source[key])) {
                // Si la clé n'existe pas dans le target ou n'est pas un objet, on initialise
                if (!target[key] || !is.obj(target[key])) {
                    target[key] = {};
                }
                // Appel récursif pour copier en profondeur
                replica(target[key], source[key]);
            } else {
                // Sinon, on copie simplement la valeur
                target[key] = source[key];
            }
        });
    });
    return target; // Retourne l'objet cible après avoir fusionné les sources
}