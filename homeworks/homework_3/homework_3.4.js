class PureString extends String {

  removeSpecialCharacters() {
    return this.replace(/\W/g, '');
  }

}
