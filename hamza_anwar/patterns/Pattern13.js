// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F
const Pattern13 = (n) => {
    let alphabets = ["A", "B", "C", "D", "E", "F"];
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(`${alphabets[j]} `);
        }
        console.log();
    }
};
const n = 6;
Pattern13(n);
const Pattern13_2 = (n) => {
    let start = "1";
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {

            // process.stdout.write(String.fromCharCode(97 + j) + " "); // start from 97 for small letters
            process.stdout.write(String.fromCharCode(start.charCodeAt(0) + j) + " "); //  start from 65 for capital letters
        }
        console.log();
    }
};
const n_2 = 9;
Pattern13_2(n_2);
