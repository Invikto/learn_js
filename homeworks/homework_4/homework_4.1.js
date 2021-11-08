import fetch from 'node-fetch';

async function currencyConvertor(inputCurrency, amount, outputCurrency) {
  const endpoint = 'http://api.exchangeratesapi.io/v1/latest';
  const method = 'GET';
  const params = {
    'access_key': 'fc8bd85f7f0277408e5c945b5c525f5e',
    'base': outputCurrency,
    'symbols': inputCurrency
  };

  let rate = await getResponse(endpoint, method, params);
  rate = rate['rates'][inputCurrency];

  return +(amount / rate).toFixed(2);
}

async function getResponse(endpoint, method, params) {
  const uri = getUriWithParams(endpoint, params);
  const response = await fetch(uri, {
    method: method
  });

  return response.json();
}

function getUriWithParams(endpoint, params) {
  let uri = endpoint;

  Object.keys(params).forEach((item, index) => {
    uri = !index ? uri.concat('?', item, '=', params[item]) :
      uri.concat('&', item, '=', params[item]);
  });

  return uri;
}

console.log(typeof []);
console.log(getUriWithParams('BYN', [40, 'EUR']));
