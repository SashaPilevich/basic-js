const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // const renamed = {};
  // return names.map(name => {
  //   let result = name;
  //   const count = renamed[name] ? renamed[name] : 0;
  //   if (count > 0) {
  //     result += `(${count})`;
  //   }
  //   renamed[result] = renamed[result] ? renamed[result] + 1 : 1;
  //   return result;
  // });
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
