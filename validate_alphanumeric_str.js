// validate if a user input string is alphanumeric. (only letters and numbers)
// string must be at least one character ("" is not valid)
// allowed chars are upper/lower case latin letters and digits from 0 - 9
// no whitespaces or underscores

// range a - z
// 97 -> 122
// or use regex: /^[a-z0-9]+$/i

// failing
const validate = str => {
    if(str.length < 1) return false;
    const nums = "0123456789";
    return [...str.toLowerCase()].every(n => {
        if(nums.includes(n)) return true;
        return (n.charCodeAt(0) > 96 && n.charCodeAt(0) < 123);
    });
};
// console.log(validate("Mazinkaiser"));
// console.log(validate("hello world_"));
// console.log(validate("PassW0rd"));
// console.log(validate("            "));
// console.log(validate(""));

// second attempt, worked (had to look this one up)
const validate_two = str => /^[a-z0-9]+$/i.test(str); // `i` means case insensitive

console.log(validate_two("Mazinkaiser"));
console.log(validate_two("hello world_"));
console.log(validate_two("PassW0rd"));
console.log(validate_two("            "));
console.log(validate_two(""));
