function triangle(string, number) {  
  let result = "";
  for (let i = 1; i <= number; i++) {
    let ligne = string.repeat(i);
    result += ligne + "\n";
  }
  return result;
}