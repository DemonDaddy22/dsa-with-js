/*
  Problem - Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

const strStr = (haystack, needle) => {
  if (!needle?.length || !haystack?.length) {
    return -1;
  }

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    const sub = haystack.substring(i, i + needle.length);
    if (needle === sub) {
      return i;
    }
  }

  return -1;
};