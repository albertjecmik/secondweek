const input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
let resultArray = [];
// sets global varialbes for the upcoming code
for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
  //console.log('inputIndex = ' ' + input[inputIndex]);
  // this for loop goes through each letter of the input variable text 
  for (let vowel = 0; vowel < vowels.length; vowel++){
    //console.log('vowel = ' + vowel)
    // this for loop goes through vowels array
    if (input[inputIndex] === vowels[vowel]){
        //if any input letter is a vowel then
      if(input[inputIndex] === 'e'){
        resultArray.push('ee')
        // if the letter is e it changes it to double 'ee'
      } else if (input[inputIndex] === 'u'){
        resultArray.push('uu');
        // if the letter is u it changes it to double 'uu' and adds it to resultArray
      }
      else{
        resultArray.push(input[inputIndex]);
        // if it is neither it adds the current letter to the resultArray
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase());
// prints out the result array all joined and with uppercase letters