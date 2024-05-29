function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // cas special
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }


    if (Array.isArray(obj)) {
        const copyArr = [];
        for (let i = 0; i < obj.length; i++) {
            copyArr[i] = deepCopy(obj[i]);
        }
        return copyArr;
    }

    const copyObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copyObj[key] = deepCopy(obj[key]);
        }
    }
    return copyObj;
}
