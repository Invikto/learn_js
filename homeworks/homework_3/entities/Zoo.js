import { Animal } from './Animal.js';
import { Worker } from './Worker.js';

import { IsNotInstanceError } from '../errors/IsNotInstanceError.js';
import { IsNotNumberError } from '../errors/IsNotNumberError.js';
import { IsNotStringError } from '../errors/IsNotStringError.js';

import { findIndexOfObject } from '../utils/findIndexOfObject.js';
import { removeDuplicateObjectsFromArr } from '../utils/removeDuplicateObjectsFromArr.js';

export class Zoo {

  constructor(establishedDate) {
    this._address = null;
    this._area = null;
    this._establishedDate = establishedDate;
    this._ticketPrice = null;
    this._workers = [];
    this._animals = [];
  }

  getAddress() {
    return this._address;
  }

  setAddress(address) {
    try {
      if (typeof address !== 'string') {
        throw new IsNotStringError('Address');
      }
      this._address = address;
    } catch (err) {
      console.log(err);
    }
  }

  getArea() {
    return this._area;
  }

  setArea(area) {
    try {
      if (typeof area !== 'string') {
        throw new IsNotStringError('Area');
      }
      this._area = area;
    } catch (err) {
      console.log(err);
    }
  }

  getEstablishedDate() {
    return this._establishedDate;
  }

  getTicketPrice() {
    return this._ticketPrice;
  }

  setTicketPrice(ticketPrice) {
    try {
      if (typeof ticketPrice !== 'number' || !isFinite(ticketPrice)) {
        throw new IsNotNumberError('Ticket price');
      }
      this._ticketPrice = ticketPrice;
    } catch (err) {
      console.log(err);
    }
  }

  addWorker(...workers) {
    try {
      if (workers.some(worker => !(worker instanceof Worker))) {
        throw new IsNotInstanceError('Worker');
      }
      this._workers = removeDuplicateObjectsFromArr(this._workers.concat(workers));
    } catch (err) {
      console.error(err);
    }
  }

  removeWorker(...workers) {
    try {
      if (workers.some(worker => !(worker instanceof Worker))) {
        throw new IsNotInstanceError('Worker');
      }
      workers.forEach(worker => {
        const indexOfWorker = findIndexOfObject(this._workers, worker);
        if (indexOfWorker !== -1) {
          this._workers.splice(indexOfWorker, 1);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  editWorker(...workers) {
    try {
      if (workers.some(worker => !(worker instanceof Worker))) {
        throw new IsNotInstanceError('Worker');
      }
      const indexOfWorker = findIndexOfObject(this._workers, workers[0]);;
      if (indexOfWorker !== -1) {
        this._workers.splice(indexOfWorker, 1, workers[1]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  addAnimal(...animals) {
    try {
      if (animals.some(animal => !(animal instanceof Animal))) {
        throw new IsNotInstanceError('Animal');
      }
      this._animals = removeDuplicateObjectsFromArr(this._animals.concat(animals));
    } catch (err) {
      console.error(err);
    }
  }

  removeAnimal(...animals) {
    try {
      if (animals.some(animal => !(animal instanceof Animal))) {
        throw new IsNotInstanceError('Animal');
      }
      animals.forEach(animal => {
        const indexOfAnimal = findIndexOfObject(this._animals, animal);
        if (indexOfAnimal !== -1) {
          this._animals.splice(indexOfAnimal, 1);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  editAnimal(...animals) {
    try {
      if (animals.some(animal => !(animal instanceof Animal))) {
        throw new IsNotInstanceError('Animal');
      }
      const indexOfAnimal = findIndexOfObject(this._animals, animals[0]);
      if (indexOfAnimal !== -1) {
        this._animals.splice(indexOfAnimal, 1, animals[1]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  showAllAnimals() {
    return this._animals;
  }

  showAnimalById(id) {
    return this._animals[id];
  }

  showAllWorkers() {
    return this._workers;
  }

}
