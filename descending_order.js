// Your task is to make a function that can take any non-negative integer
// as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.


// 1) validate argument: ensure it is positive number
// 2) continuously divide by 10 and extract the decimal
// 3) then reverse it
// i just realized it needs to be in descendin order lol
// although technically correct algo, it is not what the question is asking for
const reverser = (n) => {
    const num = n < 0 ? Math.abs(n) : n;
    return Number([...num.toString()].reverse().join(""));
}


// first run
const descending_order = (n) => {
    let num = n < 0 ? Math.abs(n) : n;

    const result = [];
    const nums = [...num.toString()].forEach(n => result.push(Number(n)));

    return Number(result.sort((a, b) => b - a).join(""));
}

// second run (this was submitted)
const descending = (n) => {
    let num = n < 0 ? Math.abs(n) : n;
    return parseInt([...num.toString()]
    .map(n => parseInt(n))
    .sort((a, b) => b - a)
    .join(""));
}

// cleaned up more don't need map, character reps from [0-9] are fine
const descendingOrder = (n) => {
    return Number([...n.toString()].sort((a, b) => b - a).join(""));
}

// one-liner
const desc = n => Number([...n.toString()].sort((a, b) => b -a ).join(""));

console.log(desc(2423446));