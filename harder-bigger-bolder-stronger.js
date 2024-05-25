function generateLetters() {
    let letter_num = 0;

    for (let i = 0; i < 120; i++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = randomLetter();
        newDiv.style.fontSize = `${11 + letter_num}px`;

        if (letter_num < 40) {
            newDiv.style.fontWeight = "300";
        } else if (letter_num < 80) {
            newDiv.style.fontWeight = "400";
        } else {
            newDiv.style.fontWeight = "600";
        }

        document.body.append(newDiv);
        letter_num++;
    }
}

function randomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const index_letter = Math.floor(Math.random() * alphabet.length);
    return alphabet[index_letter];
}

export {
    generateLetters,
}