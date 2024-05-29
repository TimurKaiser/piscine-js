function pronoun(str) {

    var obj = {};
    var arr = str.split("\n").join(" ").split(" ");
    var pronouns = /^(i|you|he|she|it|they|we)$/i;
  
    // Boucle chaque mot dans le tableau
    for (var i = 0; i < arr.length; i++) {
      if (pronouns.test(arr[i])) { // Vérifie si le mot actuel est un pronom
        var pronoun = arr[i].toLowerCase();
        obj[pronoun] = obj[pronoun] || { count: 0, word: [] };
        obj[pronoun].count++;
        obj[pronoun].word.push(findNextWord(arr.slice(i)));
      }
    }
  
    // Filtre les valeurs non définies (undefined) dans le tableau de mots
    for (var key in obj) {
      obj[key].word = obj[key].word.filter((x) => x!== undefined);
    }
  
    return obj; // Retourne l'objet contenant les résultats
  }
  
  function findNextWord(arr) {
    var pronouns = /^(i|you|he|she|it|they|we)$/i; // Expression régulière pour matcher les pronoms
  
    // Boucle à travers chaque mot dans le tableau, à partir du deuxième mot
    for (var i = 1; i < arr.length; i++) {
      if (pronouns.test(arr[i])) { // Vérifie si le mot suivant est un pronom
        return; // Si c'est le cas, retourne undefined
      } else {
        return arr[i].replace(/,/, ""); // Sinon, retourne le mot suivant après le pronom, en supprimant les virgules éventuelles
      }
    }
  }
