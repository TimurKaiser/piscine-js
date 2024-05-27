function fusion(obj1, obj2) {
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
        result[key] += Number(obj2[key]) || 0; // Assurez-vous que l'addition est effectuée correctement
      }
    });
  
    return result;
  }
  
  // Test
  console.log(fusion({ nbr: 12 }, { nbr: 23 }).nbr); // Devrait afficher 35
  