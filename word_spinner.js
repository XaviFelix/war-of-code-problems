/* 
Write a function that takes in a string of one or more words, and returns the same string, 
but with all words that have five or more letters reversed (just like the name of this kata).
Strings passed in will consist of only letters and spaces. Spaces will be included only when 
more than one word is present.
*/

// split the string " "
// for each element check the length of the string by maintaining a counter
//     - if the counter reaches 5 then we immediately reverse that word 
// after finishing the the entire scan we join the array into a stirng and done

//NOTE:  not returning anything here which is why its not working

// const spin_words = string => {
//     const result = string.split(" ").filter(x => x.length > 4).map(y => {
//         let right = y.length - 1;
//         let strBldr = "";
//         while(right >= 0) strBldr += y[right--];
//         y = strBldr;
//     });
//     console.log(result);
// }
// spin_words("Hey fellow warriors")

// my mistake was not returning properly and using filter. not needed here
const spin_words_two = string => {
    return string.split(" ").map(x => {
        if (x.length < 5) return x
        let right = x.length - 1;
        let strBldr = "";
        while(right >= 0) strBldr += x[right--];
        return strBldr;

    }).join(" ");
}
console.log(spin_words_two("Just kidding there is still one more")); 