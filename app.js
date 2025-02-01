// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar){
    let usdYen = 1.07 / 156.5;
    let oneUsdIsYens = 1/usdYen;
    oneUsdIsYens = Math.round(oneUsdIsYens*10)/10;

    let valueInYen = valueInDollar * oneUsdIsYens;

    return valueInYen;

}

const fromYenToPound = function(valueInYen) {

    let poundsPerYen = 0.87 / 156.5;
    let yensPerOnePound = 1 / poundsPerYen;
    yensPerOnePound = Math.round(yensPerOnePound*10)/10;

    let valueInPound = valueInYen / yensPerOnePound;

    return valueInPound;

}

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

