// Reverse all characters first to get words in the right order
// 1. helper fn that takes the start and end index
// Reverse all words
// 1. keep track of start index
// 2. iterate over message
// 2a. if space || i === length
//    - run helper with start word idx and i - 1
//    - increment start word idx

function reverseWords(message) {
  reverseCharacters(message, 0, message.length - 1);

  let startOfCurrentWord = 0;

  for (let i = 0; i <= message.length; i++) {
    if (message[i] === ' ' || i === message.length) {
      reverseCharacters(message, startOfCurrentWord, i - 1);
      startOfCurrentWord = i + 1;
    }
  }

  return message;
}

function reverseCharacters(chars, startIndex, endIndex) {
  let i = startIndex;
  let j = endIndex;
  while (i < j) {
    let temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;
    i++;
    j--;
  }
}

// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
