// A B C D E F
// A B C D E 
// A B C D
// A B C
// A B
// A
const Pattern14 = (n) => {
    for (let i = 0; i <= n; i++) {

        for (let j = 0; j <= n - i; j++) {
            process.stdout.write(String.fromCharCode(65 + j) + " ");
        }
        console.log();
    }
};
const n = 5;
Pattern14(n);
