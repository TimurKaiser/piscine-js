function vowelDots(string) {
    const vowels = /[aeiou]/gi;

    const result = string.replace(vowels, '$&.');

    return result;

}