// A 
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F
const Pattern15 = (n) => {
    for (let i = 0; i < n; i++) {
        // number of letters in this row
        for (let j = 0; j <= i; j++) {
            process.stdout.write(String.fromCharCode(65 + i) + " ");
        }
        console.log();
    }
};
const n = 6;
Pattern15(n);
