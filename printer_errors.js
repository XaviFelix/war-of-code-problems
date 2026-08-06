// printer uses colors anmed with letters from [a - m]
// good control strings have letters from [a - m] and each exact consequitive letter
// is counted.
// example: aaabbbbhaijjjm means 3 a's, 4 b's, 1 h, 1 a, 1 i, 3 j's, 1 m
// anything else out side of the letters is bad

// return error rate as a string: num_errors / length_of_control_string  

// examples: s = "aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// isValidChar = boolean_result = /^[a-m]$/i.test(char); 

const printer_error_two = ctrl_str => {
    let num_errors = 0;
    for(const char of ctrl_str) {
        num_errors += /^[a-m]$/i.test(char) ? 0 : 1;
    }

    return num_errors + "/" + ctrl_str.length;

};

console.log(printer_error_two("aaabbbbhaijjjm"));
console.log(printer_error_two("aaaxbbbbyyhwawiwjjjwwm"));
