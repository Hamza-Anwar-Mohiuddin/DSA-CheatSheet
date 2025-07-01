// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1
const Pattern5 = (n) => {
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= n - (i - 1); j++) {
            process.stdout.write((`${j} `));
        }
        console.log();
    }
};
const n = 6;
Pattern5(n);
