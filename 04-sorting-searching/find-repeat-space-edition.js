function findRepeat(numbers) {
  let floor = 1;
  let ceiling = numbers.length - 1;

  while (floor < ceiling) {
    const midpoint = floor + Math.floor((ceiling - floor) / 2);
    const floorLowerRange = floor;
    const floorUpperRange = midpoint;
    const ceilingLowerRange = midpoint + 1;
    const ceilingUpperRange = ceiling;

    const possibleUniqueNumbers = floorUpperRange - floorLowerRange + 1;
    let intCount = 0;
    numbers.forEach(n => {
      if (n >= floorLowerRange && n <= floorUpperRange) {
        intCount++;
      }
    });

    if (intCount > possibleUniqueNumbers) {
      // go left
      floor = floorLowerRange;
      ceiling = floorUpperRange;
    } else {
      //go right
      floor = ceilingLowerRange;
      ceiling = ceilingUpperRange;
    }
  }

  return floor;
}

// Tests

let desc = 'just the repeated number';
let actual = findRepeat([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'short array';
actual = findRepeat([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findRepeat([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
