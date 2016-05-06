const inspector = require('./../src');

class Creature {
  liveOn() {
    return 'earth';
  }
}

class Animal extends Creature {
  static counts() {
    return 10;
  }
  run() {}
}

class Dog extends Animal {
  static counts() {
    return 20;
  }
  static newOne() {
    return this();
  }
  bark() {
    return 'ouah-ouah';
  }
  get age() {
    return 1;
  }
}

describe('inspector', function() {
  it('should return all methods', function() {

  });
});