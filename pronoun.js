function pronoun(str) {
    var obj = {};
    var arr = str.split("\n").join(" ").split(" ");
    var pronouns = /^(i|you|he|she|it|they|we)$/i;
  
    for (var i = 0; i < arr.length; i++) {
      if (pronouns.test(arr[i])) {
        var pronoun = arr[i].toLowerCase();
        obj[pronoun] = obj[pronoun] || { count: 0, word: [] };
        obj[pronoun].count++;
        obj[pronoun].word.push(findNextWord(arr.slice(i)));
      }
    }
  
    for (var key in obj) {
      obj[key].word = obj[key].word.filter((x) => x!== undefined);
    }
  
    return obj;
}
  
function findNextWord(arr) {
    var pronouns = /^(i|you|he|she|it|they|we)$/i;
    for (var i = 1; i < arr.length; i++) {
      if (pronouns.test(arr[i])) {
        return;
      } else {
        return arr[i].replace(/,/, "");
      }
    }
}