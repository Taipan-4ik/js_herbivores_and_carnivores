'use strict';

class Animal {
  static alive = [];
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
  }

  // write your code here
}

class Herbivore extends Animal {
  constructor(name) {
    super(100, name);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
  // write your code here
}

class Carnivore extends Animal {
  constructor(name) {
    super(100, name);
    Animal.alive.push(this);
  }
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      const index = Animal.alive.indexOf(animal);

      Animal.alive.splice(index, 1);
    }
  }
  // write your code here
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
