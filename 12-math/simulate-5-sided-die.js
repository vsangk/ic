function rand7() {
  return Math.floor(Math.random() * (7 - 1 + 1)) + 1;
}

function rand5() {
  // Implement rand5() using rand7()

  return 0;
}

for (let i = 0; i < 10; i++) {
  console.log(rand5());
}
