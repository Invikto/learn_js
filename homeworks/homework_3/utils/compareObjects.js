export function compareObjects(object1, object2) {
  const props1 = Object.keys(object1);
  const props2 = Object.keys(object2);

  if (props1.length !== props2.length) {
    return false;
  }

  if (props1.find(prop => {
    const bothAreObjects = (typeof object1[prop] === 'object' && object1[prop] !== null
      && typeof object2[prop] === 'object' && object2[prop] !== null);

    return ((!bothAreObjects && (object1[prop] !== object2[prop]))
      || (bothAreObjects && !compareObjects(object1[prop], object2[prop])));
  })) {
    return false;
  }

  return true;
}
