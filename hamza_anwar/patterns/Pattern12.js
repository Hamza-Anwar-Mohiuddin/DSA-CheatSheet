// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
const Pattern12 = (n) => {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${num} `);
            num++;
        }
        console.log();


    }
};
const n = 5;
Pattern12(n);
