// given a string of numbers
// split them to get each number and then parse them
// finally that we have a list of numbers:

// 1) find the binary representation of that number
//    example: 4 -> 100
// 2) get the length of that binary string
//    example:  100 length => 3 therefore k = 3
// 3) Add an encoding to it: (k - 1) zeros followed by a 1
//    example:  001
// 4) finally concat result in 2) with 3) as so:
//    - 3) + 2) => 001100

// for this problem we encode it and then decode it back


// findings:
// 1) passing 2 to toString(2) gives us the binary of a given number


// My attempt
const code_debugger = str => {
    // first convert to num array
    const nums = [...str].map(s => parseInt(s));
    strBldr = "";

    // get bin rep
    console.log("this is the number: ", str);
    for(const num of nums) {
        const bin_rep  = num.toString(2);
        console.log(`Here is the bin rep of ${num}: ${bin_rep}`)

        // then get the length
        const k = bin_rep.length;
        console.log(`this is K: ${k}`)

        // then encode it with the formula
        let z = 0;
        let bin_pad = "";
        while(z < k - 1) {
            bin_pad += '0';
            z++;
        }
        bin_pad += '1';
        console.log("This is the pad: ", bin_pad, "\n");
        strBldr += bin_pad + bin_rep;
        console.log("Here is the concatenation so far: ", strBldr);
    }
};
// code_debugger(given);

const code = str => {
    const nums = [...str].map(s => parseInt(s));
    strBldr = "";

    for(const num of nums) {
        const bin_rep  = num.toString(2);
        const k = bin_rep.length;
        let z = 0;

        let bin_pad = "";
        while(z < k - 1) {
            bin_pad += '0';
            z++;
        }
        bin_pad += '1';

        strBldr += bin_pad + bin_rep;
    }
    return strBldr;
};

const decode_debugger = str => {
    // if they always start with zero
    // - we scan all zeros until we reach a 1 that is our padding
    //   - if it starts with 1 or 0 then length of k = 1
    // - which we can translate to K
    // after getting K we then grab the next k chars in the string
    // - that is our binary number which we then convert to a decimal (base 10)
    //   - use: parseInt(binaryStr, 2); to convert to number

    let left = 0;
    let current_length = 0;
    let nums = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "1"){
            let bin_str = str.slice(left, i + 1);
            let k = bin_str.length;
            i += k;
            let dec_num = str.slice(left + k, i + 1);
            left = i + 1;

            console.log("this is bin_num: ", parseInt(dec_num, 2), "\n");
        }
    }

    return "end of decoding";

};

const decode = str => {
    let left = 0;
    let current_length = 0;
    let nums = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "1"){
            let bin_str = str.slice(left, i + 1);
            let k = bin_str.length;
            i += k;
            let dec_num = str.slice(left + k, i + 1);
            nums += parseInt(dec_num, 2);
            left = i + 1;
        }
    }

    return nums;

};

// Testing the slice method real quick
const parse_string = str => {
    return str.slice(0, 3 + 1);

};

// My AI's version
// ---------------------------------------------------------------------
// code / decode, rewritten to avoid strBldr += / nums +=
// ---------------------------------------------------------------------
// Instead of concatenating onto a string every iteration (which relies on
// the engine's rope optimization to stay fast), push each piece into an
// array and join it once at the end. push() is O(1) amortized and a
// single join() is O(total length), so this is O(n) guaranteed rather
// than O(n) "as long as V8 does what we hope it does".

const codeJoin = str => {
    const nums = [...str].map(s => parseInt(s));
    const parts = [];

    for (const num of nums) {
        const bin_rep = num.toString(2);
        const k = bin_rep.length;

        let z = 0;
        let bin_pad = "";
        while (z < k - 1) {
            bin_pad += '0';
            z++;
        }
        bin_pad += '1';

        parts.push(bin_pad, bin_rep);
    }

    return parts.join("");
};

const decodeJoin = str => {
    const parts = [];
    let left = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "1") {
            let bin_str = str.slice(left, i + 1);
            let k = bin_str.length;
            i += k;
            let dec_num = str.slice(left + k, i + 1);
            parts.push(parseInt(dec_num, 2));
            left = i + 1;
        }
    }

    return parts.join("");
};

const given = "10111213";
// console.log(parse_string("00111"));
console.log(decode(code(given)));
console.log(decodeJoin(codeJoin(given)));
