/*
  Problem - Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

  Each letter in magazine can only be used once in ransomNote.
*/

const getCharCount = (word) => {
  const count = {};
  for (let char of word) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
};

const canConstruct = (ransomNote, magazine) => {
  const ransomCount = getCharCount(ransomNote);
  const magazineCount = getCharCount(magazine);

  for (let key of Object.keys(ransomCount)) {
    if (!magazineCount[key] || magazineCount[key] < ransomCount[key]) {
      return false;
    }
  }
  return true;
};