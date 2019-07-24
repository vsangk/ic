function hasPalindromePermutation(theString) {
  // Check if any permutation of the input is a palindrome
  // use a set
  // iterate over string
  //   i. check if set has current char
  //     ia. true - remove it
  //     ib. false - add it
  // check if set has more than 1 element
  //   a. true - return flase
  //   b. false - return true

  const chars = new Set();
  for (let i = 0; i < theString.length; i++) {
    if (chars.has(theString[i])) {
      chars.delete(theString[i]);
    } else {
      chars.add(theString[i]);
    }
  }

  return chars.size < 2;
}

// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
