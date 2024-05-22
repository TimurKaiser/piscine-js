function filterShortStateName(arr) {
    return arr.filter(str => str.length < 7);
}

function filterStartVowel(arr) {
    const vowelRegex = /^[aeiou]/i; // Regex pour vérifier si une chaîne commence par une voyelle
    return arr.filter(str => vowelRegex.test(str));
}

function filter5Vowels(arr) {
    const fiveOrMoreVowelsRegex = /([aeiou])/gi; // Regex pour compter au moins 5 voyelles
    return arr.filter(str => {
        const vowelsCount = str.match(fiveOrMoreVowelsRegex);
        return vowelsCount && vowelsCount.length >= 5;
    });
}

function filter1DistinctVowel(arr) {
    return arr.filter(str => {
        const distinctVowels = Array.from(new Set(str.toLowerCase().match(/[aeiou]/g)));
        return distinctVowels.length === 1;
    });
}

function multiFilter(arr) {
    return arr.filter(obj => {
        return obj.capital.length >= 8 &&
              !/^[aeiou]/i.test(obj.name) &&
                /[aeiou]/i.test(obj.tag) &&
                obj.region!== 'South';
    });
}
