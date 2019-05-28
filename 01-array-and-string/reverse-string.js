// Reverse the input array of characters in place
// [a,b,c] -> [c,b,a]
// [a,b,c,d] -> [d,c,b,a]
// 1. Set front and back pointers
// 2. Loop floor(length / 2)
// 2a. Swap - Store first, replace first with last, replace last with temp
// 2b. Inc fisrt, Dec last

function reverse(arrayOfChars) {
  let j = arrayOfChars.length - 1;
  for (let i = 0; i < Math.floor(arrayOfChars.length / 2); i++) {
    const temp = arrayOfChars[i];
    arrayOfChars[i] = arrayOfChars[j];
    arrayOfChars[j] = temp;
    j--;
  }

  return arrayOfChars;
}

// Tests

let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
