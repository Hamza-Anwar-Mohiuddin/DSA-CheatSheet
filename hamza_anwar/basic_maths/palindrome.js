//palindrom of a number
const palindrome = (n) => {
    const dup = n;
    let rev = 0;
    while (n > 0) {
        lastDigit = n % 10;
        rev = rev * 10 + lastDigit;
        n = Math.floor(n / 10);
    }
    return dup === rev;
};
const n = 121;
const numberPalindrome = palindrome(n);
console.log(numberPalindrome);
