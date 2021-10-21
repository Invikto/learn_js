function pinCodeGenerator (length) {
  let pinCode = 0;

  try {
    if (length < 0 || length > 100) {
      throw new RangeError('Argument must be between 0 and 100');
    }

    if (!Number.isInteger(length)) {
      throw new TypeError('Argument must be an integer');
    }

    pinCode = parseInt(Math.random().toFixed(length).split('.')[1], 10);
  } catch(err) {
    console.error(err);
  } finally {
    return pinCode;
  }
}
