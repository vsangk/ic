// iterate over the shuffled deck
// increment the appropriate half as you go along

// 1. set up pointers
// 2. loop over shuffled deck
// 2a. card matches half 1 -> inc half1 pointer (check to make sure pointer is not past max)
// 2b. card matches half 2 -> inc half2 pointer
// 2c. else return false
// 3. return true if got through everything

function isSingleRiffle(half1, half2, shuffledDeck) {
  let half1Pointer = 0;
  let half2Pointer = 0;
  let half1PointerMax = half1.length - 1;
  let half2PointerMax = half2.length - 1;

  for (let i = 0; i < shuffledDeck.length; i++) {
    if (
      half1Pointer <= half1PointerMax &&
      shuffledDeck[i] === half1[half1Pointer]
    ) {
      half1Pointer++;
    } else if (
      half2Pointer <= half2PointerMax &&
      shuffledDeck[i] === half2[half2Pointer]
    ) {
      half2Pointer++;
    } else {
      return false;
    }
  }

  return true;
}

// Tests

let desc = 'both halves are the same length';
let actual = isSingleRiffle([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = 'halves are different lengths';
actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'one half is empty';
actual = isSingleRiffle([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = 'shuffled deck is missing cards';
actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'shuffled deck has extra cards';
actual = isSingleRiffle([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
