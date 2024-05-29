function replica(target,...sources) {
    // Parcourir chaque source passée à la fonction
    sources.forEach(source => {
        // Pour chaque propriété dans l'objet source
        for (let key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) { // Vérifier si la propriété appartient directement à l'objet source
                // Si la clé existe déjà dans l'objet cible, on remplace sa valeur par celle de l'objet source
                if (target[key]!== undefined) {
                    replica(target[key], source[key]); // Utiliser recursion pour copier profondément
                } else {
                    target[key] = source[key]; // Sinon, simplement copier la valeur
                }
            }
        }
    });
}
