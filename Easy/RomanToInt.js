/**
 * @param {string} s
 * @return {number}
 */

const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let num = 0;
  let i = s.length - 1;

  while (i >= 0) {
    if (roman[s[i]] > roman[s[i - 1]]) {
      num = num + (roman[s[i]] - roman[s[i - 1]]);
      i = i - 2;
    } else {
      num = num + roman[s[i]];
      i = i - 1;
    }
  }
  return num;
};
