//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
const Pattern6 = (n) => {
    for (let i = 0; i < n; i++) {
        // left spaces
        for (let j = 0; j < n - (i + 1); j++) {
            process.stdout.write(" ");
        }
        // stars
        for (let k = 0; k < 2 * i + 1; k++) {
            process.stdout.write("*");
        }
        console.log();
    }
};
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
Pattern6(n);
Pattern7(n);
