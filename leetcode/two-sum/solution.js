// const twoSum_naieve = (nums, target) => {
//     const solution = [0,1]
//     if (nums.length == 2) {
//         return solution;
//     }
//     for (let i=0; i<nums.length; i++) {
//         solution[0] = i;
//         for (let j=i+1; j<nums.length; j++) {
//             solution[1] = j;
//             if (nums[i] + nums[j] === target) {
//                 return solution;
//             }
//         }
//     }
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  if (nums.length == 2) {
    return [0, 1];
  }
  const valueToIndexMap = {};
  for (let i = 0; i < nums.length; i++) {
    const solutionIndex = valueToIndexMap[target - nums[i]];
    if (solutionIndex !== undefined) {
      return [i, solutionIndex];
    }
    valueToIndexMap[nums[i]] = i;
  }
};

console.dir(twoSum([2, 7, 11, 15], 9));
console.dir(twoSum([3, 2, 4], 6));
console.dir(twoSum([3, 3], 6));
