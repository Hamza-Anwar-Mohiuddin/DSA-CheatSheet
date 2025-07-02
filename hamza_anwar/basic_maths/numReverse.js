//reverse the number
const numReverse = (n) => {
    let rev = 0;
    while (n > 0) {
        lastDigit = n % 10;
        rev = rev * 10 + lastDigit;
        n = Math.floor(n / 10);
    }
    return rev;
};
const n = 7789;
const reverse = numReverse(n);
console.log(reverse);
