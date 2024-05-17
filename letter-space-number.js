function letterSpaceNumber(input) {
    const regex = /([a-zA-Z]) (\d)(?![a-zA-Z\d])/g;
    const matches = [];
    let match;
    while ((match = regex.exec(input)) !== null) {
        matches.push(match[0]);
    }

    return matches;
}