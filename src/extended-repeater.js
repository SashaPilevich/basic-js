const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strOfStr = String(str)
  const repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  const separator = options.hasOwnProperty('separator') ? options.separator : '+';
  const addition = options.hasOwnProperty('addition') ? options.addition : '';
  const additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
  let newAddStr = new Array(additionRepeatTimes).fill(addition+'').join(additionSeparator)
  let resStr = new Array(repeatTimes).fill(strOfStr + newAddStr).join(separator)
  return resStr
}

module.exports = {
  repeater
};
