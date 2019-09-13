// [-10, 1, -5, 5, 7, 8, 2]
// review: i forgot second arguments for products of two

function highestProductOf3(arrayOfInts) {
  // Calculate the highest product of three numbers
  if (arrayOfInts.length < 3) {
    throw new Error("it's wrong dude");
  }

  let highest = Number.NEGATIVE_INFINITY;
  let highestProductOfTwo = Number.NEGATIVE_INFINITY;
  let highestProductOfThree = Number.NEGATIVE_INFINITY;
  let lowest = Number.POSITIVE_INFINITY;
  let lowestProductOfTwo = Number.POSITIVE_INFINITY;

  for (let i = 0; i < arrayOfInts.length; i++) {
    const currentNumber = arrayOfInts[i];

    if (i > 1) {
      highestProductOfThree = Math.max(
        highestProductOfTwo * currentNumber,
        lowestProductOfTwo * currentNumber,
        highestProductOfThree
      );
    }

    if (i > 0) {
      highestProductOfTwo = Math.max(
        highest * currentNumber,
        lowest * currentNumber,
        highestProductOfTwo
      );
      lowestProductOfTwo = Math.min(
        lowest * currentNumber,
        highest * currentNumber,
        lowestProductOfTwo
      );
    }

    highest = Math.max(currentNumber, highest);
    lowest = Math.min(currentNumber, lowest);
  }

  return highestProductOfThree;
}

// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => highestProductOf3([]);
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => highestProductOf3([1]);
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => highestProductOf3([1, 1]);
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
