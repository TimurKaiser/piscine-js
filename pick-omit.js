function pick(obj, keys) {
    const newObj = {};
    if (!Array.isArray(keys)) {
        keys = [keys];
    }
    keys.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    });
    return newObj;
}

function omit(obj, keys) {
    const newObj = {
        ...obj 
    }; 
    if (!Array.isArray(keys)) {
        keys = [keys];
    }
    keys.forEach(key => {
        delete newObj[key];
    });
    return newObj;
}
