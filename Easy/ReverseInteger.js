/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (obj[rem] && i !== obj[rem]) return [i, obj[rem]];
  }

  return [];
};
