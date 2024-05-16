function multiply(a, b) {
    var sum = 0;
    for (var i = 0; i < Math.abs(b); i++) {
      sum += a;
    }
  
    if (a < 0 && b < 0) {
      return Math.abs(sum);
    } else if (a < 0 && b > 0) {
      return sum
    } else if (a > 0 && b < 0) {
      return -sum
    } else {
      return sum
    }
}
  
function divide(a, b) {
    let aVerif = Math.sign(a)
    let bVerif = Math.sign(b)
    a = Math.abs(a)
    b = Math.abs(b)
    let i = 0
    while(a >= b) {
      a -= b
      i++
    }
    return (aVerif === bVerif ? i : -i);
}
  
function modulo(a, b) {
    let aVerif = Math.sign(a)
    a = Math.abs(a)
    b = Math.abs(b)
    while(a >= b) {
      a -= b
    }
    return (aVerif < 0 ? -a : a); 
}
  
