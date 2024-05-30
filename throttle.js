// doc pour throtlle https://grafikart.fr/tutoriels/debounce-throttle-642
// throttle peut compter le nombre de scroll dans un site web et permet de gerer le flux de donner pour pas surcharger la page

function throttle(callback, delay) {
    let last = 0; // Dernière fois que la fonction de rappel a été exécutée
    let timer; // Timer pour planifier l'exécution retardée

    return function() {
        const context = this; // Contexte de `this` de la fonction retournée
        const now = +new Date(); // Heure actuelle en millisecondes
        const args = arguments; // Arguments passés à la fonction retournée

        const remaining = delay - (now - last); // Temps restant avant la prochaine exécution possible

        if (remaining <= 0 || last === 0) {
            // Si le délai est écoulé ou si c'est le premier appel
            if (timer) {
                clearTimeout(timer); // Annuler tout timer en cours
                timer = null;
            }
            last = now; // Mettre à jour le dernier moment d'exécution
            callback.apply(context, args); // Exécuter immédiatement la fonction de rappel
        } else if (!timer) {
            // Planifier l'exécution si aucune planification en cours
            timer = setTimeout(function() {
                last = +new Date(); // Mettre à jour le dernier moment d'exécution après l'exécution différée
                timer = null; // Réinitialiser le timer
                callback.apply(context, args); // Exécuter la fonction de rappel
            }, remaining);
        }
    };
}


// pour information leading marche comme dans debounce, c'est nous qui déterminons quand est ce que la fonction commence
// leading se base sur le premier element et trailing justement sur le dernier 
// a savoir que ce sont des options et du coup il faudrait rajouter selon les besoin


function opThrottle(callback, delay, options = {}) {
    let lastCallTime = 0; // Dernière fois que la fonction de rappel a été exécutée
    let timer = null; // Timer pour planifier l'exécution retardée
    const leading = options.leading !== undefined ? options.leading : true; // Option leading par défaut à true
    const trailing = options.trailing !== undefined ? options.trailing : true; // Option trailing par défaut à true
    let lastArgs = null; // Derniers arguments passés à la fonction
    let lastContext = null; // Dernier contexte de `this`

    return function() {
        const context = this; // Contexte de `this` de la fonction retournée
        const args = arguments; // Arguments passés à la fonction retournée
        const now = +new Date(); // Heure actuelle en millisecondes

        if (!lastCallTime && !leading) {
            // Si leading est faux et c'est le premier appel, initialiser lastCallTime à maintenant
            lastCallTime = now;
        }

        const remaining = delay - (now - lastCallTime); // Temps restant avant la prochaine exécution possible

        if (remaining <= 0 || remaining > delay) {
            // Si le délai est écoulé ou si le temps restant est plus grand que le délai (cas de la première exécution)
            if (timer) {
                clearTimeout(timer); // Annuler tout timer en cours
                timer = null;
            }
            lastCallTime = now; // Mettre à jour le dernier moment d'exécution
            callback.apply(context, args); // Exécuter immédiatement la fonction de rappel
        } else if (trailing) {
            // Si trailing est vrai, mémoriser les derniers arguments et planifier l'exécution
            if (timer) {
                clearTimeout(timer); // Annuler tout timer en cours
            }
            lastArgs = args; // Mémoriser les derniers arguments
            lastContext = context; // Mémoriser le dernier contexte
            timer = setTimeout(function() {
                lastCallTime = leading === false ? 0 : +new Date(); // Si leading est faux, réinitialiser lastCallTime après l'exécution
                timer = null;
                callback.apply(lastContext, lastArgs); // Exécuter la fonction de rappel avec les derniers arguments et contexte
                lastArgs = null; // Réinitialiser les derniers arguments après l'exécution
                lastContext = null; // Réinitialiser le dernier contexte après l'exécution
            }, remaining);
        }
    };
}
