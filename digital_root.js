// given n, take the sum of the digits of n.
// if value has more than one digit, continue reducing in this way until a single-digit number
// is produced

const result = (n => {
    return n === 0 ? 0 : 1 + (n - 1) % 9;
})(1234); // 1
console.log(result);
