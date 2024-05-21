function countLeapYears(date) {
    const anne = date.getFullYear();
  //easyy
    const par4 = Math.floor(anne / 4);
    const par100 = Math.floor(anne / 100);
    const par400 = Math.floor(anne / 400);
  
    const result = par4 - par100 + par400;
  
    return result;
}
  