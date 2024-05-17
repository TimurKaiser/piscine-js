function triangle(string, number) {
    let str = string;

    for (let i = 1; i <= number; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += str; 
        }
        console.log(row);
    }
}

