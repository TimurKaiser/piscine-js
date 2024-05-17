function RNA (string) {
    return string
        .split("")
        .map((splitdna) => dna[splitdna])
        .join("")
}

function DNA(string) {
    return string
        .split("")
        .map((splitrna) => rna[splitrna])
        .join("")
}

const dna = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
}