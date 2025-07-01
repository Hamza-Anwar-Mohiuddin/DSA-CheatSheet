//      A
//     ABA
//    ABCBA
//   ABCDCBA
//  ABCDEDCBA
// ABCDEFEDCBA
const Pattern16 = (n) => {
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - i - 1; j++) {
            process.stdout.write(" ");
        }

        for (let k = 0; k < 2 * i + 1; k++) {
            if (k <= i) {

                process.stdout.write(String.fromCharCode(65 + k));
            } else {

                const mirrorIndex = 2 * i - k;
                process.stdout.write(String.fromCharCode(65 + mirrorIndex));
            }
        }
        console.log();
    }
};
const n = 6;
Pattern16(n);
