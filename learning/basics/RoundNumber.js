

var costPrice = 12900;
var sellingPrice = 30000;

var profitPercentage = ((sellingPrice - costPrice) / sellingPrice) * 100;

console.log(`This is not rounded off: ${profitPercentage}%`);

var roundPricePercentage = Math.round(profitPercentage);    // display with back tick

console.log("This is rounded off: " + roundPricePercentage + "%");      //display with quotes