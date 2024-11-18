/*
  Problem - Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
*/

// can directly do s.toLowerCase() as well

const [word] = require('./inputs');

const LOWER_AND_UPPER_CHAR_GAP = 32;
const UPPER_CASE_RANGE = Object.freeze({
  START: 65,
  END: 90,
});

const getLowerChar = (char) => {
  return String.fromCharCode(char.charCodeAt() + LOWER_AND_UPPER_CHAR_GAP);
};

const toLowerCase = (s) => {
  let lower = '';
  for (let c of s) {
    lower = lower.concat(
      c.charCodeAt() >= UPPER_CASE_RANGE.START && c.charCodeAt() <= UPPER_CASE_RANGE.END
        ? getLowerChar(c)
        : c
    );
  }
  return lower;
};

console.log(toLowerCase(word));