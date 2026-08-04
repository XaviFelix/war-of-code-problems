// map to count number of chars in a string
// mainly getting used to inserting or adding a default value if it doesn not exist

const count = new Map();
const str = "This is a random string to count the number of characters in it";

for(const char of str) {
    count.set(char, (count.get(char) || 0) + 1) // this is the important part to remember
}

console.log(count);
