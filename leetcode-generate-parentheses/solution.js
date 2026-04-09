// const resultCache = {
//   0: [],
//   1: ["()"],
//   2: ["(())", "()()"],
// };

// const generateParenthesis_naieve = (n) => {
//   if (resultCache[n] !== undefined) return resultCache[n];

//   const result = new Set();
//   resultCache[n - 1] = generateParenthesis(n - 1);
//   for (let j = 0; j < resultCache[n - 1].length; j++) {
//     result.add("(" + resultCache[n - 1][j] + ")");
//   }
//   for (let j = 0; j < resultCache[n - 1].length; j++) {
//     result.add(resultCache[n - 1][j] + "()");
//     result.add("()" + resultCache[n - 1][j]);
//   }

//   return Array.from(result).sort();
// };
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const stringRef = { value: "" };
  const result = [];
  addNextParens(n, 0, 0, stringRef, result);
  return result;
};

const addNextParens = (n, openBrackets, closeBrackets, _str, _result) => {
  if (_str.value.length == n * 2) {
    _result.push(_str.value);
    return
  }
  if (openBrackets < n) {
    _str.value += "("
    addNextParens(n,openBrackets + 1,closeBrackets,_str,_result);
    _str.value = _str.value.substr(0,_str.value.length-1);
  }
  if (closeBrackets < openBrackets) {
    _str.value += ")"
    addNextParens(n,openBrackets,closeBrackets+1,_str,_result);
    _str.value = _str.value.substr(0,_str.value.length-1);
  }
};

console.dir(generateParenthesis(1));
console.dir(generateParenthesis(2));
console.dir(generateParenthesis(3));
console.dir(generateParenthesis(4));
