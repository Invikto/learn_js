const getCountOfVovels = str => {
  const VOVELS = ['a', 'e', 'i', 'o', 'u', 'y'];

  return str.split('').filter(letter => VOVELS.includes(letter)).length;
}
