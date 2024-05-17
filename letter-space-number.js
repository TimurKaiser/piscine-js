function letterSpaceNumber(string) {
    // [a-zA-Z] : Correspond à une lettre (majuscule ou minuscule).
    //** ** : Suivie par un espace.
    //\d : Suivie par un chiffre (0-9).
    //(?!\w) : Assure que le chiffre n'est pas suivi par un caractère de mot (lettre, chiffre ou underscore).
    const regex = /[a-zA-Z] \d(?!\d|\w)/g;
    const matches = input.match(regex);

    return matches ? matches : [];
}