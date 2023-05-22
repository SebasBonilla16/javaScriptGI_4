// *VERY HARD: You are given coins of different denominations and a total amount of money amount. 
// Write a function to compute the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps 
// Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 


// Look into dynamic programming 

function coinCount(coins, amount){
    let minimumCoins = Infinity;

    function backtrack(amount, count, number){
        if (amount === 0){
            minimumCoins = Math.min(minimumCoins, count);
            return;
        }
        if (amount < 0 || number === coins.length){
            return;
        }
        for (let i = 0; i <= Math.floor(amount / coins[number]); i++){
            backtrack(amount - (i * coins[number]), count + i, number+1);
        }
    } backtrack (amount, 0, 0);
    if (minimumCoins === Infinity){
        return -1;
    } else {
        return minimumCoins;
    }
}

console.log(coinCount([1,2,5], 11));