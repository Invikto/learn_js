import { getResponse } from './getResponse.js';

export async function getCurrancyRate(token, inputCurrency, outputCurrency) {
  const endpoint = 'http://api.exchangeratesapi.io/v1/latest';
  const method = 'GET';
  const params = {
    'access_key': token,
    'base': outputCurrency,
    'symbols': inputCurrency
  };

  const rate = await getResponse(endpoint, method, params);

  return rate['rates'][inputCurrency];
}
