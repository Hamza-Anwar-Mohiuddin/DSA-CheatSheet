//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********
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
const n = 5;
Pattern6(n);
