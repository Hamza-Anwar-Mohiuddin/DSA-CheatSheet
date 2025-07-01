// ***********
//  *********
//   *******
//    *****
//     ***
//      *
const Pattern7 = (n) => {
    for (let i = n; i >= 1; i--) {
        // left spaces
        for (let j = 1; j <= n - i; j++) {
            process.stdout.write(" ");
        }
        // stars
        for (let k = 1; k <= 2 * i - 1; k++) {
            process.stdout.write("*");
        }
        console.log();
    }
};
const n = 6;
Pattern7(n);
