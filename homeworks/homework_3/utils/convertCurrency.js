export function convertCurrency(amount, rate) {
  return +(amount / rate).toFixed(2);
}
