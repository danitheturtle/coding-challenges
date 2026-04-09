/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  if (coins.length === 0) return -1;
  if (amount === 0) return 0;
  let coinCountForValue = new Array(amount+1).fill(amount+1);
  coinCountForValue[0] = 0
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < amount + 1; j++) {
      // Either coin count is already at min due to previous iteration,
      // or adding current coin to (x-coin)'s count is a new min count.
      coinCountForValue[j] = Math.min(
        coinCountForValue[j],
        coinCountForValue[j - coins[i]] + 1,
      );
    }
  }
  return coinCountForValue[amount] === amount+1 ? -1 : coinCountForValue[amount];
};

console.dir(coinChange([1, 2, 5], 11)); // 3
console.dir(coinChange([2], 3)); // -1
console.dir(coinChange([1], 0)); // 0
console.dir(coinChange([2, 3, 5], 11)); // 5
