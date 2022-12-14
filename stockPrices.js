// Instructions
// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

// best([15, 10, 20, 22, 1, 9])
// 12

function best(stockPrices) {

    let highestPrice = stockPrices[0] 
    let highestPriceIndex = 0

    stockPrices.forEach((price, index) => {
        
        if (price > highestPrice) {
            highestPrice = price
            highestPriceIndex = index
        }
    })

    const trimmedArray = stockPrices.slice(0, highestPriceIndex + 1)
    trimmedArray.sort((a, b) => a - b)
    return trimmedArray[trimmedArray.length - 1] - trimmedArray[0]
}

console.log(best([15, 10, 20, 22, 1, 9])) // 12
console.log(best([1, 2, 3, 4, 5])) // 4
console.log(best([2, 3, 10, 6, 4, 8, 1])) // 8
console.log(best([7, 9, 5, 6, 3, 2])) // 2
console.log(best([0, 100])) // 100
console.log(best([5, 4 , 3, 2, 1])) // 0
console.log(best([100])) // 0
console.log(best([100, 0])) // 0
