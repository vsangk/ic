function isFirstComeFirstServed(takeOut, dineIn, servedOrders) {
  const takeOutLength = takeOut.length;
  const dineInLength = dineIn.length;
  let takeOutIndex = 0;
  let dineInIndex = 0;

  for (let i = 0; i < servedOrders.length; i++) {
    const current = servedOrders[i];

    if (takeOutIndex < takeOutLength && takeOut[takeOutIndex] === current) {
      takeOutIndex++;
    } else if (dineInIndex < dineInLength && dineIn[dineInIndex] === current) {
      dineInIndex++;
    } else {
      return false;
    }
  }

  return true;
}

// Tests

let desc = 'both registers have same number of orders';
let actual = isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]);
assertEquals(actual, true, desc);

desc = 'registers have different lengths';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'one register is empty';
actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
assertEquals(actual, true, desc);

desc = 'served orders is missing orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
assertEquals(actual, false, desc);

desc = 'served orders has extra orders';
actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]);
assertEquals(actual, false, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
