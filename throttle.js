// doc pour throtlle https://grafikart.fr/tutoriels/debounce-throttle-642

function throttle(callback, delay) {
    var last; // Dernière fois que la fonction de rappel a été exécutée
    var timer; // Timer pour planifier l'exécution retardée
    return function() {
        var context = this; // Contexte de `this` de la fonction retournée
        var now = +new Date(); // Heure actuelle en millisecondes
        var args = arguments; // Arguments passés à la fonction retournée

        if (last && now < last + delay) {
            // Si la dernière exécution est trop récente, réinitialise le timer
            clearTimeout(timer); // Annule le timer précédent
            timer = setTimeout(function() {
                last = now; // Met à jour le dernier moment d'exécution
                callback.apply(context, args); // Exécute le callback avec le contexte et les arguments
            }, delay - (now - last)); // Délai restant pour atteindre la prochaine exécution
        } else {
            last = now; // Met à jour le dernier moment d'exécution
            callback.apply(context, args); // Exécute le callback immédiatement
        }
    };
}

// pour information leading marche comme dans debounce, c'est nous qui déterminons quand est ce que la fonction commence
// leading se base sur le premier element et trailing justement sur le dernier 
// a savoir que ce sont des options et du coup il faudrait rajouter selon les besoin
function opThrottle(callback, delay, options = {}) {
    let last = 0; // Dernière fois que la fonction de rappel a été exécutée
    let timer; // Timer pour planifier l'exécution retardée
    const leading = options.leading !== undefined ? options.leading : true; // Option leading par défaut à true
    const trailing = options.trailing !== undefined ? options.trailing : true; // Option trailing par défaut à true

    return function() {
        const context = this; // Contexte de `this` de la fonction retournée
        const args = arguments; // Arguments passés à la fonction retournée
        const now = +new Date(); // Heure actuelle en millisecondes

        if (!last && !leading) {
            // Si leading est faux et c'est le premier appel, initialiser last à maintenant
            last = now;
        }

        const remaining = delay - (now - last); // Temps restant avant la prochaine exécution possible

        if (remaining <= 0 || remaining > delay) {
            // Si le délai est écoulé ou si le temps restant est plus grand que le délai (cas de la première exécution)
            if (timer) {
                clearTimeout(timer); // Annuler tout timer en cours
                timer = null;
            }
            last = now; // Mettre à jour le dernier moment d'exécution
            callback.apply(context, args); // Exécuter immédiatement la fonction de rappel
        } else if (trailing && !timer) {
            // Si trailing est vrai et aucun timer n'est en cours, planifier l'exécution
            timer = setTimeout(function() {
                last = leading === false ? 0 : +new Date(); // Si leading est faux, réinitialiser last après l'exécution
                timer = null;
                callback.apply(context, args); // Exécuter la fonction de rappel
            }, remaining);
        }
    };
}
