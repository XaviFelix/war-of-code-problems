// convert a string into a new string
// each character in the new string is represented by '(' if it appears only once
// if it does't then the character is represted by ')'

// 1) create a map
// 2) scan each char and increase its count
// 3) use that map and scan that entire map
//    - if its value is greater than 1 then use ')'
//    - else use '('


// first-attempt
const dup_encoder = str => {
    const count = new Map();
    str = str.toLowerCase();
    for(const char_key of str) {
        count.set(char_key, (count.get(char_key) || 0) + 1);
    }

    let strBldr = "";
    for(let i = 0; i < str.length; i++) {
        if(count.get(str[i]) > 1)
            strBldr += ')';
        else
            strBldr += '(';
    }

    return strBldr;
};

console.log(dup_encoder("din"));
console.log(dup_encoder("recede"));
console.log(dup_encoder("Success"));
console.log(dup_encoder("(( @"));
