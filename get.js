function get(src, path) {
    const keys = path.split('.');
    let current = src;
    
    for (const key of keys) {
        if (current && typeof current === 'object') {
            if (Array.isArray(current)) {
                const index = parseInt(key);
                if (!isNaN(index) && index < current.length) {
                    current = current[index];
                } else {
                    return undefined;
                }
            } else {
                if (key in current) {
                    current = current[key];
                } else {
                    return undefined;
                }
            }
        } else {
            return undefined;
        }
    }
    return current;
}
