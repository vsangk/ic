function findRotationPoint(words) {
  // Find the rotation point in the vector
  let startIndex = 0;
  let endIndex = words.length - 1;

  while (startIndex < endIndex) {
    const searchIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    const current = words[searchIndex];

    if (current >= words[0]) {
      // go right
      startIndex = searchIndex;
    } else {
      // go left
      endIndex = searchIndex;
    }

    // If floor and ceiling have converged
    if (startIndex + 1 === endIndex) {
      // Between floor and ceiling is where we flipped to the beginning
      // so ceiling is alphabetically first
      break;
    }
  }

  return endIndex;
}

// knew I needed BS and check against first element of the array
// didn't know how to verify actual rotation point

// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint([
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
]);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
