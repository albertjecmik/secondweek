let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
//removes the last element in the secretMessage array
//console.log(secretMessage.length);
secretMessage.push('to','program');
//adds the two words to the end of the array
secretMessage[7] = 'right';
// changes the 7th elemement of the array to right
secretMessage.shift();
// removes the first element of the array
secretMessage.unshift('Programming')
// adds the first element to the array which is 'Programming'
secretMessage.splice(6,5, 'know');
//takes awway 5 elements starting at element number 6 and instead puts 'know'
console.log(secretMessage.join(' '));
//prints the whole thing all together