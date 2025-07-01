// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
const Pattern2 = (n) => {
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j}`);
        }
        console.log();
    }
};
const n = 6;
Pattern4(n);
