"use strict";

module.exports = {
  /**
  This export is optional.
  If supplied, it will be called once to initialize your module.
  The data argument will contain your extra data file (see below) as a Buffer,
  or undefined if you don't supply a data file.
  */
  init: init,
  /**
  Take a word an return true if it classifies the word as English, otherwise false
  */
  test: test
}

function init(buffer){
  
}

function test(word){
  return true;
}
 

function multiply(a, b){
  return a.map( ai => b[0].map((el, j) => ai.reduce( (summ, aik, k) => summ + aik * b[k][j], 0)));
}

//test
module.exports.multiply = multiply;
//endtest