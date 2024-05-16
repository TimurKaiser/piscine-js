function slice(arg, startIndex, endIndex) {
    if (typeof arg === 'string') {
        if (endIndex === undefined) {
            endIndex = arg.length;
        }
        return arg.slice(startIndex, endIndex);
    } else if (Array.isArray(arg)) {
        if (endIndex === undefined) {
            endIndex = arg.length;
        }
        return arg.slice(startIndex, endIndex);
    } else {
        return undefined;
    }
}