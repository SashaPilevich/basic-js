const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const newDomain = {};
  domains.forEach((item) => {
    const newArr = item.split('.').reverse();
    newArr.forEach((_, index) => {
      const key = '.'.concat(newArr.slice(0, index+1).join('.'));
      newDomain[key]? newDomain[key] += 1 : newDomain[key] = 1;
    })
  })
  return newDomain
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
