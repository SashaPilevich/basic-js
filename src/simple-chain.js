const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chaining:[],
  getLength() {
    return this.chaining.length
  },
  addLink(value=' ') {
    this.chaining.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
  if(position<1 || typeof position !== 'number'|| position > this.chaining.length || position % 1){
    this.chaining = []
    throw Error(`You can't remove incorrect link!`)
  }
   this.chaining.splice(position-1,1)
   return this
  },
  reverseChain() {
    this.chaining.reverse()
    return this
  },
  finishChain() {
    let result = this.chaining.join('~~')
    this.chaining = []
    return result
  }
};

module.exports = {
  chainMaker
};
