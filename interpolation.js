function interpolation({ step, start, end, callback, duration }) {
    // Calculer l'intervalle entre chaque point d'interpolation
    const interval = (end - start) / step;  // C'est ici que nous divisons par step pour obtenir l'intervalle
    // Calculer le délai entre chaque appel de callback
    const delay = duration / step;

    for (let i = 0; i < step; i++) {
        // Calculer la position actuelle
        const x = start + i * interval;
        // Calculer le temps écoulé
        const y = i * delay;

        // Appeler le callback après le délai approprié
        setTimeout(() => {
            callback([x, y]);
        }, y);
    }
}