export function allElementsAreObjects(arr) {
  return arr.every(item => (typeof item === 'object' && item !== null))
}
