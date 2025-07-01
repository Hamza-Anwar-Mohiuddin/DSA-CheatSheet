// 1
// 01
// 101
// 0101
// 10101
// 010101
const Pattern10 = (n) => {
    let start = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) start = 1;
        else start = 0;
        for (j = 1; j <= i; j++) {
            process.stdout.write(`${start}`);
            start = 1 - start;
        }
        console.log();


    }
};
const n = 5;
Pattern10(n);
