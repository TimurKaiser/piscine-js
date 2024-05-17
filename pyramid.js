function pyramid(ch, depth) {
    let string = "";
    let spaces = " ".repeat(ch.length);
    for (var i = 1; i <= depth; i++) {
        string= string + spaces.repeat(depth - i) + ch.repeat(2 * i - 1) + "\n";
    }
    return string.slice(0, -1);
}