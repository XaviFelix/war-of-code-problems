// given a string, detect whether or not it is a panagram.
// return true if it is 
// return false if its not
// ignore nums/punctuations

// 0) check the length of the string, if less than 26 chars long then return false else continue
// 1) initialize a hashmap where the keys are a-z and the values are counters starting at 0 (range => 97 -> 122)
// 2) scan the string and for every character, increment the counter of the key in the map
// 3) in the end if there is a character that equals 0 then return false,
//    else if all keys have a counter grater than 0 then return true

// just using an array
const isPanagram = (str) => {
    if (str.length < 26) return false;

    const alphabet = new Map();
    for(let i = 97; i < 123; i++) { alphabet.set(String.fromCharCode(i), 0) }

    const lowerCase = [...str.toLowerCase()];

    lowerCase.forEach((char) => {
        if (alphabet.has(char)) {
            alphabet.set(char, alphabet.get(char) + 1);
        }
    });

    return [...alphabet.values()].every((count) => count > 0);
}

// Using a set 
const isPana = (str) => {
    const strSet = new Set(str.toLowerCase());
    if (strSet.size < 26) return false;

    const alphabet = new Map();
    for(let i = 97; i < 123; i++) alphabet.set(String.fromCharCode(i), 0)

    
    strSet.forEach((char) => {
    })

    return [...alphabet.values()].every(n => n > 0);
}




console.log(isPana("qwertyuiopasdfghjklmnxbvcz"));