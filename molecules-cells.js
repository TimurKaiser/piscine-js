const dna =  {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
}

const rna = {
    C: 'G',
    G: 'C',
    A: 'T',
    U: 'A'
}

function RNA(str){
    return str
        .slice("")
        .map((splitrna)=> dna[splitrna])
        .join("")
}

function DNA(str){
    return str
    .slice("")
    .map((splitdna)=> rna[splitdna])
    .join("")
}