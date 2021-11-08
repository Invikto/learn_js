# Homework #3

1. There is a JSON file with a price list. All prices there are in dollars. You need to:

   * convert all prices to euros. You can use a static exchange rate or rate from [https://exchangeratesapi.io/];
   * add 'Currency' field to the source and output objects;
   * save both objects to separate JSON files.

2. Given an array of objects. Every object is an identity card of a person. We need to keep only unique values in this array. Implement a function that will do this work.

3. You need to create a Zoo catalog, where we will keep all animals from this Zoo.

   * You need to create a Zoo class which. See structure in the attachment. You should implement the following methods:
     * get/set zoo’s address;
     * get/set zoo’s area
     * get established date
     * get/set ticket’s price
     * add/remove/edit worker
     * add/remove/edit animal
     * show all animals
     * show animal by id
     * show all workers
   * Create Animal class. See structure in the attachment. Implement the following methods:
     * get animal info
     * set weight
     * set height
   * Create child classes for some kinds of animals. See structure in the attachment. Implement the possibility to set the properties of child classes.

4. Extend build-in class string with a method called `removeSpecialCharacters`. This method should work for every string created within your js file.

   For example `‘HE!!LL??OO’.removeSpecialCharacters() => ‘HELLO’`.
