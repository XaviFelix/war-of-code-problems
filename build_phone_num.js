// first attempt
function createPhoneNumber(numbers){
  return numbers.length === 10 ? `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  : [];
}

// solution i liked because replace works like the sed command
createPhoneNumber=n=>'(###) ###-####'.replace(/#/g, ()=> n.shift())

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
