import { convertCurrency } from './convertCurrency.js';

export function convertPrices(arr, rate) {
  return arr.map(function (product) {
    const newProduct = { ...product };
    const prices = newProduct['Prices'] = { ...newProduct['Prices'] };

    for (let price in prices) {
      prices[price] = convertCurrency(prices[price], rate);
    }

    return newProduct;
  });
}
