function sums(n) {
    if (n === 0 || n === 1) return [];
    if (n === 2) return [[1, 1]];
    const results = [];
    function findSums(n, min, path) {
        if (n === 0) {
            if (path.length > 1) {
                results.push(path);
            }
            return;
        }
        for (let i = min; i <= n; i++) {
            findSums(n - i, i, [...path, i]);
        }
    }
    findSums(n, 1, []);
    return results;
}