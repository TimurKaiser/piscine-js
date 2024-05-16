function slice(input, startIndex, endIndex) {
    if (typeof input === 'string') {
        if (startIndex < 0) {
            startIndex = startIndex + input.length;
        }
        if (endIndex !== undefined && endIndex < 0) {
            endIndex = endIndex + input.length;
        }
        return input.substring(startIndex, endIndex);
    } else if (Array.isArray(input)) { // pas typeof car les array sont des objets mais les objets pas des array forcement
        if (startIndex < 0) {
            startIndex = input.length + startIndex;
            if (startIndex < 0) {
                startIndex = 0;
            }
        }
        if (endIndex !== undefined && endIndex < 0) {
            endIndex = input.length + endIndex;
            if (endIndex < 0) {
                endIndex = 0;
            }
        }
        return input.slice(startIndex, endIndex);
    } else {
        return undefined;
    }
}
