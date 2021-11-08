import { getDataFromFile } from './utils/getDataFromFile.js';
import { removeDuplicateObjectsFromArr } from './utils/removeDuplicateObjectsFromArr.js';

const inputFile = './data/data_3.2.json';
console.log(removeDuplicateObjectsFromArr(getDataFromFile(inputFile)));
