const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw Error (`'arr' parameter must be an instance of the Array!`);
  let transformArray = [];
  arr.forEach((item,index) => {
    if(item == '--discard-next'){
      transformArray.push(undefined)
    } else if(item == '--discard-prev'){
      transformArray[index-1] = undefined
      transformArray.push(undefined)
    } else if(item == '--double-next'){
      transformArray.push(arr[index+1])
    }else if(item == '--double-prev'){
      transformArray.push(transformArray[index-1])
    }else if(arr[index-1] == '--discard-next'){
      transformArray.push(undefined)
    }else{
      transformArray.push(item)
    }
  })
  let result = transformArray.filter((item) => {
    if(typeof item !== 'undefined'){
      return item
    }
  })
  return result
}

module.exports = {
  transform
};
