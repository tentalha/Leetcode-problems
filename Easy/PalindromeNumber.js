/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let temp = x;
  let rev = 0;

  while (temp > 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }
  return x === rev;
};
