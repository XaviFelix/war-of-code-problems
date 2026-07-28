// people only have a first naem
// some have a first and last name
// most have first, middle, and last names

// goal: init the middle names (if ther is any)

/*

'Jack Ryan' => 'Jack Ryan'
'Dimitri' => "Dimitri"
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

*/

// 1) split the string into an array of names
// 2) skip the first and last element, every element in between will
// 3) get the first letter of word and append a '.' to it
// 4) join("")

// first
const init_name = names => {
    const split_names = names.split(" ");
    if (split_names.length == 1) return split_names[0];

    const result = [];
    result.push(split_names[0]);

    for(let i = 1; i < split_names.length - 1; i++) {
        result.push(split_names[i].at(0) + '.');
    }
    result.push(split_names[split_names.length - 1]);

    return result.join(" ");
};

// second 
const init_name_two = names => {
    const split_names = names.split(" ");
    const n = split_names.length;
    if(n == 1) return split_names[0];

    const result = [];
    result.push(split_names[0]);

    for(let i = 1; i < n - 1; i++) result.push(split_names[i].at(0) + '.');

    result.push(split_names[n - 1]);

    return result.join(" ");
};

// third reducing lines of code
const init_name_three = names => {
    let arr = names.split(' ');
    for(let i = 1; i < arr.length - 1; i++) arr[i] = arr[i].charAt(0) + '.';
    return arr.join(' ');
};

console.log(init_name_three("Dimitri"));
console.log(init_name_three("Jack Ryan"));
console.log(init_name_three("Lois Mary Lane"));
console.log(init_name_three("Alice Betty Catherine Davis"));
