/*
  Problem - Given two arrays arr1 and arr2, return a new array joinedArray.
  All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

  joinedArray is an array formed by merging arr1 and arr2 based on their id key.
  The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

  If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

  If two objects share an id, their properties should be merged into a single object:

  If a key only exists in one object, that single key-value pair should be included in the object.
  If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
*/

const join = (arr1, arr2) => {
  const joined = {};

  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    const key = item.id;
    joined[key] = item;
  }

  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i];
    const key = item.id;
    if (!(key in joined)) {
      joined[key] = item;
    } else {
      Object.keys(item).forEach((k) => {
        joined[key][k] = item[k];
      });
    }
  }

  return Object.values(joined);
};