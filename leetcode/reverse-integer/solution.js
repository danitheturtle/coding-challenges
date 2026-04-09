/**
 * @param {number} x
 * @return {number}
 */
const MAX_NEG_INT = -2147483648;
const MAX_INT = 2147483647;
const reverse = (x) => {
  const sign = x >= 0 ? 1 : -1;
  const valueAsString = String(Math.abs(x));
  const reversedInt = sign * Number(valueAsString.split("").reverse().join(""));
  if (reversedInt > MAX_INT || reversedInt < MAX_NEG_INT) return 0;
  return reversedInt;
};

console.dir(reverse(123));
console.dir(reverse(-123));
console.dir(reverse(120));
