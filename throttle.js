// doc pour throtlle https://grafikart.fr/tutoriels/debounce-throttle-642
// throttle peut compter le nombre de scroll dans un site web et permet de gerer le flux de donner pour pas surcharger la page

function throttle(fn, delay) {
    let last = 0; // Dernière exécution de la fonction de rappel

    return function () {
        const now = +new Date(); // Heure actuelle en millisecondes
        if (now - last > delay) { // Vérifie si le délai s'est écoulé depuis la dernière exécution
            fn.apply(this, arguments); // Exécute la fonction de rappel avec le contexte actuel et les arguments
            last = now; // Met à jour le dernier moment d'exécution
        }
    };
}

// pour information leading marche comme dans debounce, c'est nous qui déterminons quand est ce que la fonction commence
// leading se base sur le premier element et trailing justement sur le dernier 
// a savoir que ce sont des options et du coup il faudrait rajouter selon les besoin



function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let last = 0; // Dernière exécution de la fonction de rappel
    let timer = null; // Timer pour planifier l'exécution retardée

    return function () {
        const now = +new Date(); // Heure actuelle en millisecondes

        // Si leading est faux et c'est le premier appel, initialise last à maintenant
        if (!last && leading === false) {
            last = now;
        }

        // Vérifie si le délai s'est écoulé depuis la dernière exécution
        if (now - last > delay) {
            if (timer) {
                clearTimeout(timer); // Annule tout timer en cours
                timer = null;
            }
            fn.apply(this, arguments); // Exécute immédiatement la fonction de rappel
            last = now; // Met à jour le dernier moment d'exécution
        } else if (!timer && trailing !== false) {
            // Planifie l'exécution si trailing est vrai et aucun timer n'est en cours
            timer = setTimeout(() => {
                fn.apply(this, arguments); // Exécute la fonction de rappel après le délai
                last = +new Date(); // Met à jour le dernier moment d'exécution après l'exécution différée
                timer = null; // Réinitialise le timer
            }, delay);
        }
    };
}
