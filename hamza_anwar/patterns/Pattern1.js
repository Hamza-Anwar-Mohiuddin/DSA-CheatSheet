/*
Prints:
*
* *
* * *
* * * *
* * * * *
* * * * * *
*/
const Pattern1 = (n) => {
    for (let i = 1; i <= 6; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
};
const n = 6;
Pattern1(n);
