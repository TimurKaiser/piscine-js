function ionOut(string) {
    const regex = /\b\w*t(?=ion)\w*\b/g;
    
    const result = string.match(regex) || [];
    
    return result.map(word => word.replace('ion', ''));
}
  