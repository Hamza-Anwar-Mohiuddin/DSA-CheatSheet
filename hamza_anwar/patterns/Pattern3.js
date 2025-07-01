// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6
const Pattern3 = (n) => {
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write((i.toString() + ' '));
        }
        console.log();
    }
};
const n = 6;
Pattern3(n);
