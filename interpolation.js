function interpolation({ step, start, end, callback, duration }) {
    const interval = (end - start) / step;  // Distance entre chaque point
    const delay = duration / step;  // Délai entre chaque appel de callback

    function scheduleCallback(i) {
        if (i < step) {
            const x = start + i * interval;  // Position actuelle
            const y = i * delay;  // Temps écoulé

            setTimeout(() => {
                callback([x, y]);  // Appeler le callback
                scheduleCallback(i + 1);  // Appel récursif pour le prochain point
            }, y);
        }
    }

    scheduleCallback(0);  // Initialiser le premier appel
}
