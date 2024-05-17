function triangle(string, number) {  
  for (let i = 1; i <= number; i++) {
    let ligne = string.repeat(i);
    console.log(ligne);
  }
}