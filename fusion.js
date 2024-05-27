function fusion(obj1, obj2) {
    //fait a l'aide de phind c'etait tellement simple en réalité 

    // Fusionne les objets en utilisant Object.assign
    let result = Object.assign({}, obj1, obj2);
  
    // Traite spécifiquement les tableaux
    Object.keys(result).forEach(key => {
      if (Array.isArray(result[key])) {
        result[key] = [...result[key],...(obj2[key] || [])];
      }
    });
  
    // Traite spécifiquement les chaînes de caractères
    Object.keys(result).forEach(key => {
      if (typeof result[key] === 'string') {
        result[key] += (obj2[key] || '').trim()? ' ' + (obj2[key] || '') : '';
      }
    });
  
    // Traite spécifiquement les nombres
    Object.keys(result).forEach(key => {
      if (typeof result[key] === 'number') {
        result[key] += (obj2[key] || 0);
      }
    });
  
    return
}
  