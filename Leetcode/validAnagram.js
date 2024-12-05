/*
  Problem - Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

const isAnagram = (s, t) => {
  if (s?.length !== t.length) {
    return false;
  }

  const sorted_s = s.split('').sort();
  const sorted_t = t.split('').sort();

  for (let i = 0; i < sorted_s.length; i++) {
    if (sorted_s[i] !== sorted_t[i]) {
      return false;
    }
  }

  return true;
};