// positive num which is the sum of its own digits
// each raised to the power of the number of digits given in a given base

// example1: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 returns True
// example2: 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938 returns False

// first split the number into an array
// then get the length of the array
// power each element in that array and then sum 
// check the sum against the original value
// - if equal then true else flase

const narcissistic = value => {
    const values = Array.from(String(value), Number);
    const power = values.length;

    const result = values.map(x => Math.pow(x, power)).reduce((x, y) => x + y, 0);

    return result === value ? true : false;
}

// most efficient
const narcissistic_math = value => {
    // set-up
    let remaining = value;
    const digits = [];
    while(remaining > 0) {
        digits.push(remaining % 10)
        remaining = Math.floor(remaining / 10);
    }
    const power = digits.length;

    // calculation + result
    return digits.map(x => x ** power).reduce((x, y) => x + y, 0) === value;

}
// console.log(narcissistic_math(534494836))
// console.log(narcissistic_math(534494836));


function narcissistic_v1(value) {
    const values = Array.from(String(value), Number);
    const power = values.length;

    return values
           .map(x => x ** power)
           .reduce((x, y) => x + y, 0) === value
}

const narcissistic_v2 = value => [...values=value+''].reduce((x, y) => x + y ** values.length, 0) === value;

// console.log(narcissistic_v2(534494836));
// console.log(narcissistic_v2(534494836));

const addDigits = value => {
    const values = [...value+''];
    console.log(values.reduce((x, y) => x + y * 1, 0));
}
addDigits(34);