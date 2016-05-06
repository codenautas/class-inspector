'use strict';

var getInheritanceChain = function(obj) {
  let chain = [obj];

  let parent = Object.getPrototypeOf(obj);
  while(parent.name && parent.name != '') {
    chain.unshift(parent);
    parent = Object.getPrototypeOf(parent);
  }

  return chain;
};

module.exports = function(obj) {
  if (typeof obj != 'function') {
    return {};
  }
  
  let chain = getInheritanceChain(obj);

  let staticMethods = {};
  let instanceMethods = {};

  for(let i in chain) {
    let klass = chain[i];
    let proto = klass.prototype;

    let staticProps = Object.getOwnPropertyNames(klass);
    let prototypeProps = Object.getOwnPropertyNames(proto);
    
    staticProps.forEach(function(name) {
      staticMethods[name] = Object.getOwnPropertyDescriptor(klass, name);
    });

    prototypeProps.forEach(function(name) {
      instanceMethods[name] = Object.getOwnPropertyDescriptor(proto, name);
    });
  }

  return {
    staticMethods: staticMethods,
    instanceMethods: instanceMethods
  };
};