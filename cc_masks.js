// write maskify which changes all but four chars into '#'
// 455636460793 5616

const maskify = argument => {
    if(argument.length < 4) return argument;

    const size = argument.length; 
    let hidden_str = argument.slice(0, size - 4);
    const last_four = argument.slice(size - 4)
    hidden_str = hidden_str.replace(/[0-9a-zA-Z]/g, "#");
    return hidden_str + last_four;
};


console.log(maskify("4556364607935616"))
console.log(maskify("skippy"))
console.log(maskify("lpu"))

// one liner that i found
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
