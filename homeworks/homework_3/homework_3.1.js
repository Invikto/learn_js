import { getCurrancyRate } from './utils/getCurrancyRate.js';
import { addPropertyToEachItem } from './utils/addPropertyToEachItem.js';
import { getDataFromFile } from './utils/getDataFromFile.js';
import { convertPrices } from './utils/convertPrices.js';
import { setDataToFile } from './utils/setDataToFile.js';

async function main() {
  const token = 'fc8bd85f7f0277408e5c945b5c525f5e';
  const USD = 'USD';
  const EUR = 'EUR';

  const inputFile = './data/data_3.1.json';
  const productsInDollars = getDataFromFile(inputFile).data;

  const rate = await getCurrancyRate(token, USD, EUR);
  const productsInEuros = convertPrices(productsInDollars, rate);

  const CURRENCY_GPROP = 'Currency';
  addPropertyToEachItem(productsInDollars, CURRENCY_GPROP, USD);
  addPropertyToEachItem(productsInEuros, CURRENCY_GPROP, EUR);

  let outputFile = './data/products_in_dollars.json';
  setDataToFile(outputFile, productsInDollars);
  outputFile = './data/products_in_euros.json';
  setDataToFile(outputFile, productsInEuros);
}

main();
