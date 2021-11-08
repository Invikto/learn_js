import { compareObjects } from './compareObjects.js';

export function removeDuplicateObjectsFromArr(arr) {
  const pureArr = [...arr];

  pureArr.forEach((item1, index1, array) => {
    array.forEach((item2, index2) => {
      if ((index1 !== index2) && compareObjects(item1, item2)) {
        array.splice(index2, 1); 
      }
    });
  });

  return pureArr;
}
