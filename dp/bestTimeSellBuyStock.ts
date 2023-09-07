function maxProfit(prices: number[]) {
    let buy = prices[0],
        maxProfitVal = 0;

    for (let i = 0; i < prices.length; i++) {
        if (buy >= prices[i]) buy = prices[i];
        else if (prices[i] - buy > maxProfitVal) {
            maxProfitVal = prices[i] - buy;
        }
    }

    return maxProfitVal;
}

export const testcase = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(testcase));
