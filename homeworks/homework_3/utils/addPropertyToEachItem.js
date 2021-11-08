export function addPropertyToEachItem(arr, key, value) {
  arr.forEach(item => {
    item[key] = value;
  });
}
