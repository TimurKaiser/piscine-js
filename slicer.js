// fait avec gpt a revoir j'ai saturéé

function slice(input, startIndex, endIndex) {
    if (typeof input === 'string') {

        if (startIndex < 0) {
            startIndex = startIndex + input.length;
        }
        if (endIndex === undefined) {
            endIndex = input.length;
        }
        return input.substring(startIndex, endIndex); // substring vas aller extrare a partir de l'index start ou l'index start et end
    } else if (Array.isArray(input)) { // vaux mieux utiliser ca que typeof car l'array est un objet mais touts les objects ne sont pas des array
        if (endIndex === undefined) {
            endIndex = input.length;
        }
        return input.slice(startIndex, endIndex);
    } else {
        return undefined;
    }
}
