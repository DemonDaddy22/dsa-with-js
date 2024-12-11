/*
  Problem - Given a pattern and a string s, find if s follows the same pattern.

  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
  Specifically:

  Each letter in pattern maps to exactly one unique word in s.
  Each unique word in s maps to exactly one letter in pattern.
  No two letters map to the same word, and no two words map to the same letter.
*/

const wordPattern = (pattern, s) => {
  const words = s.split(/\s+/);
  if (words.length !== pattern.length) {
    return false;
  }
  const patternMap = new Map();
  const wordMap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];
    if (!patternMap.has(char) && !wordMap.has(word)) {
      patternMap.set(char, word);
      wordMap.set(word, char);
    } else if (patternMap.get(char) !== word || wordMap.get(word) !== char) {
      return false;
    }
  }
  return true;
};