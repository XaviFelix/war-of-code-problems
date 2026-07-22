/*
    Complete the method/function so that it converts dash/underscore delimited words
    into camel casing. The first word within the output should be capitalized only if
    the original word was capitalized (known as Upper Camel Case, also often referred
    to as Pascal case). The next words should be always capitalized.
    

    examples:
    1) "the-stealth-warrior" gets converted to "theStealthWarrior"
    2) "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
    3) "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */

// first attempt, actually can be a O(d * n)
const cml_csr = str => {

    let word = [...str]; // O(n)

    // O(d * n)
    for(let i = 0; i < word.length; i++) {
        if(word[i] === "-" || word[i] === "_") {
            word.splice(i, 1);
            word[i] = word[i].toUpperCase();
        }
    }

    // O(n)
    return word.join("");
}; // time complexity: O(d * n) , space complexity O(n -d) where d are dashes/underscores

// console.log(cml_csr("the-stealth-warrior"));
// console.log(cml_csr("The_Stealth_Warrior"));
// console.log(cml_csr("The_Stealth-Warrior"));


//second attempt
const cml_csr_two = str => {
    return [...str].reduce((acc, curr) => {
        if(curr === "_" || curr === "-") {
            acc.capNext = true;
            return acc;
        }
        acc.result += acc.capNext ? curr.toUpperCase() : curr;
        acc.capNext = false;
        return acc;
    }, { result: "", capNext: false }).result;
}; // time complexity: O(n), space complexity: O(n)

// console.log(cml_csr_two("the-stealth-warrior"));
// console.log(cml_csr_two("The_Stealth_Warrior"));
// console.log(cml_csr_two("The_Stealth-Warrior"));

//third attempt (accounts for consecutive - _)
const csr = str => {
    return [...str].reduce((acc, curr) => {
        if(curr === "_" || curr === "-") {
            acc.isNextCap = true;
            return acc; // this is fine b/c we are bldng from acc.result
        }
        acc.result += acc.isNextCap ? curr.toUpperCase() : curr;
        acc.isNextCap = false;
        return acc;

    }, { result: "", isNextCap: false }).result;
};

console.log(csr("a__-_Pippi-Was-evil"));
console.log(csr("The_Stealth_Warrior"));
console.log(csr("The_Stealth-Warrior"));


// loop attempt (doesn't account for consequitive - _)
const result = (str => {

    let strBldr = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "_" || str[i] === "-") {
            strBldr += str[++i].toUpperCase();
            continue;
        }
        strBldr += str[i];
    }
    return strBldr;

})("a__-_Pippi-Was-evil"); 
// doesn't account for consequtive -_. best sol is to use a flag liek in reduce method
console.log(result)