function compose() {
    document.addEventListener("keydown", function(event) {
        if (event.key.match(/^[a-z]$/)) {
            const note = document.createElement("div");
            note.className = "note";
            const backgroundColor = `hsl(${event.key.charCodeAt(0) * 10}, 70%, 50%)`;
            note.style.backgroundColor = backgroundColor;
            note.textContent = event.key;
            document.body.append(note);
        } else if (event.key == "Escape") {
            let notes = document.getElementsByClassName("note");
            while (notes.length > 0) {
                notes[0].remove();
            }
        } else if (event.key == "Backspace") {
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
