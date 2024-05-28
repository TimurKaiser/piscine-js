// fait avex phind a revoir

function fusion(obj1, obj2) {
    // Crée une copie superficielle de obj1 pour éviter de modifier l'objet original
    const result = {...obj1 };
  
    // Parcourir chaque clé présente dans obj1
    Object.keys(obj1).forEach(key => {
      // Vérifie si les valeurs associées à la clé dans obj1 et obj2 sont des tableaux
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        // Concatène les tableaux des objets obj1 et obj2
        result[key] = [...obj1[key],...obj2[key]];
      } 
      // Vérifie si les valeurs associées à la clé dans obj1 et obj2 sont des chaînes de caractères
      else if (typeof obj1[key] === 'string' && typeof obj2[key] === 'string') {
        // Concatène les chaînes de caractères avec un espace entre elles
        result[key] = `${obj1[key]} ${obj2[key]}`;
      } 
      // Vérifie si les valeurs associées à la clé dans obj1 et obj2 sont des nombres
      else if (typeof obj1[key] === 'number' && typeof obj2[key] === 'number') {
        // Additionne les nombres
        result[key] = obj1[key] + obj2[key];
      } 
      // Vérifie si les valeurs associées à la clé dans obj1 et obj2 sont des objets (et non null)
      else if (typeof obj1[key] === 'object' && obj1[key]!== null && typeof obj2[key] === 'object' && obj2[key]!== null) {
        // Fait une fusion récursive des objets
        result[key] = fusion(obj1[key], obj2[key]);
      } 
      // Vérifie si la clé n'existe pas déjà dans result
      else if (!result.hasOwnProperty(key)) {
        // Copie la valeur de la clé depuis obj2 vers result
        result[key] = obj2[key];
      }
    });
  
    // Retourne le résultat fusionné
    return result;
}
  