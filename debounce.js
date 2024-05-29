// doc a revoir https://www.freecodecamp.org/news/javascript-debounce-example/
// doc pour le faire https://grafikart.fr/tutoriels/debounce-throttle-642

function debounce(callback, delay) {
    var timer; // Variable pour stocker le timer
    return function() {
        var args = arguments; // Arguments passés à la fonction retournée
        var context = this; // Contexte de `this` de la fonction retournée
        clearTimeout(timer); // Annule le timer précédent
        timer = setTimeout(function() { // Définit un nouveau timer
            callback.apply(context, args); // Appelle le callback avec le contexte et les arguments
        }, delay);
    };
}



function opDebounce(callback, delay, options = {}) {
    let timer; // Variable pour stocker le timer
    let lastCall = 0; // Variable pour stocker l'heure du dernier appel
    const leading = options.leading || false; // Option pour déclencher immédiatement

    return function() {
        const now = Date.now(); // Heure actuelle en millisecondes
        const args = arguments; // Arguments passés à la fonction retournée
        const context = this; // Contexte de `this` de la fonction retournée

        // Si l'option leading est vraie et que ce n'est pas le premier appel
        if (leading && !lastCall) {
            callback.apply(context, args); // Appelle immédiatement le callback
        }

        clearTimeout(timer); // Annule le timer précédent
        timer = setTimeout(function() {
            if (!leading) {
                callback.apply(context, args); // Appelle le callback si leading est faux
            }
            lastCall = 0; // Réinitialise lastCall après l'appel du callback
        }, delay);

        if (leading) {
            lastCall = now; // Met à jour lastCall avec l'heure actuelle
        }
    };
}
