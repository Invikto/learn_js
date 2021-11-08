import { Animal } from './entities/Animal.js';
import { Snake } from './entities/Snake.js';
import { Worker } from './entities/Worker.js';
import { Zoo } from './entities/Zoo.js';

const z = new Zoo();
console.log(z.setAddress(2) + ' ' + z.getAddress())
// z.addAnimal({ 'a': 'a' }, 'b', 'c', { 'd': 'd' }, 'e', 'f', 'g');
// z.addAnimal();
// z.addAnimal();
// console.log(z.showAllAnimals());
// z.addAnimal(null, { 'a': true }, { '2': '2' }, { 'a': true }, { '1': '1', '2': '2' }, { '2': '2', '1': '1' }, { 'b': 'b', 'c': false });

const animal1 = new Animal();
animal1.setHeight(5);
animal1.setWeight(10);
const animal2 = new Animal();
animal2.setHeight(7);
animal2.setWeight(14);
// console.log(animal1);
// console.log(animal2);
z.addAnimal(animal1, animal2, []);
z.removeAnimal({ 'x': 'x' }, { '2': '2' }, {
  _type: null,
  _color: null,
  _weight: 10,
  _height: 5,
  _placeOfOrigin: null
});
// z.removeAnimal('b', 'c', 'e', 'g');
const animal3 = {
  _type: null,
  _color: null,
  _weight: 0,
  _height: 1115,
  _placeOfOrigin: null
};
z.editAnimal({
  _type: null,
  _color: null,
  _weight: 14,
  _height: 7,
  _placeOfOrigin: null
}, animal3);
// z.setAddress();
const notAnaimal = new Snake();
console.log(notAnaimal instanceof Animal);
notAnaimal.setPoisonous()
console.log(`isPoisonous is ${notAnaimal.getInfo('sdfsdf')}`);

const a = new Worker();
a.setPhone('812632187874234872369478236222');
// a.setPoisonous(true);
console.log(a);
