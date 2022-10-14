const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxRes = 0;
  let num = [];

  while (n) {
      num.push(n % 10);
      n = Math.floor(n/ 10);
  }
  for (let i = 0; i < num.length; i++) {
      let x = 0;
      for (let j = num.length - 1; j >= 0; j--) {
          if (j !== i) {
              x = x * 10 + num[j];
          }
      }
      maxRes = Math.max(x, maxRes);
  }
  return maxRes;
}



module.exports = {
  deleteDigit
};
