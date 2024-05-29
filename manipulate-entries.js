function filterEntries(obj, filter) {
    return Object.fromEntries(Object.entries(obj).filter(filter));
}
  
function mapEntries(entries, mapper) {
    return Object.fromEntries(Object.entries(entries).map(mapper));
}
  
function reduceEntries(entries, reducer, initialValue) {
    return Object.entries(entries).reduce(reducer, initialValue);
}
  
function lowCarbs(entries) {
    return filterEntries(entries, ([key, value]) => (nutritionDB[key].carbs / 100) * value <= 50);
}
  
function totalCalories(entries) {
    return Number(reduceEntries(entries, (acc, [key, value]) => acc + (nutritionDB[key].calories / 100) * value, 0).toFixed(1));
}

function cartTotal(entries, nutritionDB) {
    return Object.fromEntries(
        Object.entries(entries).map(([item, amount]) => [
            item,
            Object.fromEntries(
                Object.entries(nutritionDB[item]).map(([nutrient, valuePer100g]) => [
                    nutrient,
                    Math.round((amount / 100) * valuePer100g * 1000) / 1000
                ])
            )
        ])
    );
}