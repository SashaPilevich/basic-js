const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let arrCount = []
    arr.forEach((item) => {
      if(Array.isArray(item)){
        arrCount.push(this.calculateDepth(item))
      }else{
        arrCount.push(0)
      }
    })
    let deepth = Math.max(...arrCount)
    if(deepth<0){
      return 1
    }else{
      return deepth + 1
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
