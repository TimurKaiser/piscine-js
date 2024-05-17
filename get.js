function get(src, path) {
    const keys = path.split('.');
    let res = src;
    for (const key of keys) {
        if (res[key] === undefined) {
            return undefined;
        }
        res = res[key];
    }
    return res;
}