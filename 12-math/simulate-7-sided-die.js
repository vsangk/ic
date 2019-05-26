function rand5() {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}

function rand7() {
  // Implement rand7() using rand5()

  return 0;
}

for (let i = 0; i < 14; i++) {
  console.log(rand7());
}
