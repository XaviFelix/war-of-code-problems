// given an array, send all zeros to the end of the array
// keep the order of the array except for the zeros
const nums = [false, 1, 2, 1, 1, 3, "a", 0, 0, 1, 0, []];

// first attempt: good
const result = (nums => {
    // auxillary space
    let numbas = []; // O(n - z)
    let zeros = []; //  O(z)

    // one pass O(n)
    for(const x of nums) {
        if (x === 0) zeros.push(x);
        else numbas.push(x);
    }

    // combine: overall time: O(n), space: O(n)
    return [...numbas, ...zeros];
})(nums);
console.log(result);


// solution i found
const result_two = (nums => {
    return [...nums.filter(x => x !== 0), ...nums.filter(x => x === 0)]
})(nums);
console.log(result_two);