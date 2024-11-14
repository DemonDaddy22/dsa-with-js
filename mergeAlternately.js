/*
  Problem - You are given two strings word1 and word2.
  Merge the strings by adding letters in alternating order, starting with word1.
  If a string is longer than the other, append the additional letters onto the end of the merged string.

  Return the merged string.
*/

const [w1, w2] = require('./inputs');

const mergeAlternately = (word1, word2) => {
  let i = 0, j = 0, n = word1.length, m = word2.length;
  let word = '';

  while (i < n && j < m) {
    word = word.concat(word1[i++]).concat(word2[j++]);
  }

  while (i < n) {
    word = word.concat(word1[i++]);
  }

  while (j < m) {
    word = word.concat(word2[j++]);
  }

  return word;
};

console.log(mergeAlternately(w1, w2));