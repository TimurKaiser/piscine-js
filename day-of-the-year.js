const dayOfTheYear = (date) => {
    let total = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    let totalmili = Date.UTC(date.getFullYear(), 0, 0);
    let jourAnne = Math.floor((total - totalmili) / (24 * 60 * 60 * 1000));
    
    return jourAnne;
}