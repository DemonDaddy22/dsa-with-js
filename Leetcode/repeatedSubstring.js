/*
  Problem - Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
*/

const repeatedSubstring = (s) => {
  // approach like finding string in rotated string
  // s -> abcabc, ss -> a bcabcabcab c
  // s -> ababab, ss -> a bababababa b

  const repeated = s.concat(s);
  const sliced = repeated.slice(1, repeated.length - 1);
  return sliced.includes(s);
};