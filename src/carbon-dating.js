const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let numOfSampleActivity = Number(sampleActivity)
  if(!sampleActivity || typeof sampleActivity !=='string' || numOfSampleActivity<=0 || numOfSampleActivity>MODERN_ACTIVITY || isNaN(numOfSampleActivity)){
    return false
  }else {
    let age = Math.log(MODERN_ACTIVITY/numOfSampleActivity)/(0.693/HALF_LIFE_PERIOD)
    return Math.ceil(age)
  }
  
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
