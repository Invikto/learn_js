import { compareObjects } from './compareObjects.js';

export function findIndexOfObject(arr, object) {
  return arr.findIndex(item => compareObjects(item, object));
}
