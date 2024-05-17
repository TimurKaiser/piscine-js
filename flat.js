function flat(arr, depth = 1) {
    if (!Array.isArray(arr)) {
        return arr;
    }
    if (depth <= 0) {
        return arr;
    }
    return arr.reduce((acc, cur) => acc.concat(flat(cur, depth - 1)), []);
}