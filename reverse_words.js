// set up a stack
// loop entire str
// - push each character
// set conditionals
// if " "
// - then pop() until empty and append it all to stringbuilder
// return the result

const example_one = "The quick brown fox jumps over the lazy dog.";
const example_two = "double  spaces";

// debug purposes
const word_ex = str => {
    [...str].forEach((char, idx) => {
        // console.log(char, idx);
    });

};

// word_ex(example_one);

// fist attempt
const word_reverser = str => {
    let stack = [];
    let newString = "";
    [...str].forEach((_, idx) => {
        if (str[idx] === " ") {
            while (!(stack.length === 0)) {
                newString += stack.pop();
            }
            newString += str[idx];
        } else {
            stack.push(str[idx])
        }
    });

    while (!(stack.length === 0)) {
        newString += stack.pop();
    }

    return newString;
};

// fist-attempt but IIFM version
(str => {
    let stack = [];
    let strBldr = "";
    [...str].forEach((_, idx) => {
        if (str[idx] === " ") {
            while (!(stack.length === 0)) strBldr += stack.pop();
            strBldr += str[idx];
        } else stack.push(str[idx]);
    });
    while (!(stack.length === 0)) strBldr += stack.pop();
    console.log(strBldr);
})(example_two);

// short attempt found in a forum
const reverseWords = (str) => {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// using IIFM
((str) => {
    console.log(str.split("").reverse().join("").split(" ").reverse().join(" "));
})(example_one);


// second attempt
const word_reverser_revised = str => {
    const stack = [];
    let newString = "";

    for (let i = 0; i < str.length; i++) stack.push(str[i])

    //     console.log(stack);

    let word = "";
    let spaceCount = 0;
    while (stack.length > 0) {
        if (!(stack[stack.length - 1] === " ")) { word += stack.pop() }
        else {
            spaceCount += 1;
            if (spaceCount == 1) {
                newString = word + newString;
                word = "";
                stack.pop();
            } else {
                word += stack.pop();
                newString = word + newString;
                word = "";
            }
        }
    }

    return word += " " + newString;
}

// console.log(word_reverser(example_one));