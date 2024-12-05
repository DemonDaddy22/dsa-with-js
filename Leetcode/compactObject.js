/*
  Problem - Given an object or array obj, return a compact object.

  A compact object is the same as the original object, except with keys containing falsy values removed.
  This operation applies to the object and any nested objects.
  Arrays are considered objects where the indices are keys.
  A value is considered falsy when Boolean(value) returns false.

  You may assume the obj is the output of JSON.parse.
  In other words, it is valid JSON.
*/

// if object
// if value is falsy -> delete key
// if value is primitive -> do nothing
// if value is array/object -> call compactObject with value
// if array
// if value is false -> remove that value
// if value is primitive -> do nothing
// if value is array/object -> call compactObject with value

const compactObject = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (!Array.isArray(obj)) {
    for (let key of Object.keys(obj)) {
      const value = obj[key];
      if (!Boolean(value)) {
        delete obj[key];
      } else if (typeof obj === 'object') {
        obj[key] = compactObject(value);
      }
    }
  } else {
    let index = 0;
    while (index < obj.length) {
      const value = obj[index];
      if (!Boolean(value)) {
        obj.splice(index, 1);
      } else if (typeof obj === 'object') {
        obj[index++] = compactObject(value);
      } else {
        index++;
      }
    }
  }
  return obj;
};