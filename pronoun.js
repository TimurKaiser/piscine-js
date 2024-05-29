function pronoun(str) {
    const pronounRegex = /\b(i|you|he|she|it|they|we)\b\s+(\w+)/gi;
    const pronounObj = {};

    // Utilisation de matchAll pour trouver toutes les occurrences des pronoms et des mots suivants
    const matches = Array.from(str.matchAll(pronounRegex));

    // Parcours de toutes les correspondances
    matches.forEach(match => {
        const pronoun = match[1].toLowerCase();
        const word = match[2].toLowerCase();

        // Initialisation de l'objet sous-clé pour le pronom s'il n'existe pas
        if (!pronounObj[pronoun]) {
            pronounObj[pronoun] = { word: [], count: 0 };
        }

        // Incrémentation du compte et ajout du mot suivant dans le tableau des mots
        pronounObj[pronoun].count++;
        pronounObj[pronoun].word.push(word);
    });

    return pronounObj;
}