// * * * * * *
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
// row2 = 6 - 1
// row3 = 6 - 2
// row4 = 6 - 3
// rowi = 6 - (i-1)
const Pattern4 = (n) => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - (i - 1); j++) {
            process.stdout.write('* ');
        }
        console.log();
    }
};
const n = 6;
Pattern4(n);
