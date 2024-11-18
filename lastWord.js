/*
  Problem - Given a string s consisting of words and spaces, return the length of the last word in the string.

  A word is a maximal substring consisting of non-space characters only.
*/

const lengthOfLastWord = (s) => {
  const words = s.trim().split(/\s+/);
  return words[words.length - 1].length;
};