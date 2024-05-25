function compose() {
    // Ajoute un écouteur d'événements pour le clavier
    document.addEventListene("keydown", function(event) {
        // Vérifie si la touche pressée est une lettre minuscule
        if (event.key.match(/^[a-z]$/)) {
            // Crée un élément div avec la classe 'note'
            const note = document.createElement("div");
            note.className = "note";
            // Génère une couleur de fond unique en fonction de la touche pressée
            const backgroundColor = `hsl(${event.key.charCodeAt(0) * 10}, 70%, 50%)`;
            note.style.backgroundColor = backgroundColor;
            // Affiche le caractère de la touche pressée dans la note
            note.textContent = event.key;
            // Ajoute la note au corps du document
            document.body.append(note);
        } 
        // Si la touche pressée est Escape, supprime toutes les notes
        else if (event.key == "Escape") {
            let notes = document.getElementsByClassName("note");
            while (notes.length > 0) {
                notes[0].remove();
            }
        } 
        // Si la touche pressée est Backspace, supprime la dernière note
        else if (event.key == "Backspace") {
            let notes = document.getElementsByClassName("note");
            if (notes.length > 0) {
                notes[notes.length - 1].remove();
            }
        }
    });
}

export {
    compose,
}
