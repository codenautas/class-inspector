const inspector = require('./../src');
const expect = require('expect.js');

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
    var boby = new Dog();
    var obtained=Object.keys(inspector(boby.constructor).instanceMethods);
    // console.log(inspector(boby.constructor));
    expect(obtained).to.eql([
      'constructor', 'liveOn', 'run', 'bark', 'age'
    ]);
  });
  it('should return all statics', function() {
    var boby = new Dog();
    var obtained=Object.keys(inspector(boby.constructor).staticMethods);
    expect(obtained).to.eql([
      "length",
      "prototype",
      "name",
      "counts",
      "newOne"
    ]);
  });
});