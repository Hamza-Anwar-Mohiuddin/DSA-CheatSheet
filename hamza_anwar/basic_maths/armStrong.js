//An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits. For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153. 
const armStrong = (n) => {
    const dup = n;
    const numberOfDigits = Math.ceil(Math.log10(n));
    let sum = 0;
    while (n > 0) {
        const lastDigit = n % 10;
        sum += Math.pow(lastDigit, numberOfDigits);
        n = Math.floor(n / 10);
    }
    console.log(sum);

    return dup === sum;
};
const n = 12;
const armStrongNumber = armStrong(n);
console.log(armStrongNumber);
