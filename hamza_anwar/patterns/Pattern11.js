// 1      1
// 12    21
// 123  321
// 12344321
const Pattern11 = (n) => {

    for (let i = 1; i <= n; i++) {
        //for number
        for (j = 1; j <= i; j++) {
            process.stdout.write(`${j}`);
        }
        //for spaces
        for (j = 1; j <= (2 * n) - (2 * i); j++) {
            process.stdout.write(` `);
        }
        for (j = i; j >= 1; j--) {
            process.stdout.write(`${j}`);
        }
        console.log();


    }
};
const n = 4;
Pattern11(n);
