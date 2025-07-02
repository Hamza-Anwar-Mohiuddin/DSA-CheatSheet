//count number of digits in  a number
const count = (n) => {
    let count = 0;
    while (n > 0) {
        count++;
        lastDigit = n % 10;
        console.log(lastDigit);
        n = Math.floor(n / 10);

    }
    return count;
};
const n = 7789;
const countNumber = count(n);
console.log(countNumber);




//btw guys aap ko pata hai

// Math.ceil(log10(N)) = number of digits in N

console.log(Math.ceil(Math.log10(7789)))
