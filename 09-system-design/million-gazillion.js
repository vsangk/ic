// Implement a trie and use it to efficiently store strings.

class Trie {
  addWord(word) {
    return false;
  }
}

// Tests

const trie = new Trie();

assertEquals(trie.addWord('catch'), true, 'new word 1');
assertEquals(trie.addWord('cakes'), true, 'new word 2');
assertEquals(trie.addWord('cake'), true, 'prefix of existing word');
assertEquals(trie.addWord('cake'), false, 'word already present');
assertEquals(trie.addWord('caked'), true, 'new word 3');
assertEquals(trie.addWord('catch'), false, 'all words still present');
assertEquals(trie.addWord(''), true, 'empty word');
assertEquals(trie.addWord(''), false, 'empty word present');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
