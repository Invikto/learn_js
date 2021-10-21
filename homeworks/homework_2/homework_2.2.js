function validatePhoneNymber(phoneNumber) {
	try {
  	return Number.isInteger(phoneNumber) || Number.isInteger(+phoneNumber.replace(/\s+/g, ''));
	} catch(err) {
		err = new TypeError('Argument must be an integer or a string');
		console.error(err);
	}
}
