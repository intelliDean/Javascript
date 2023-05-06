let checkEven = [2, 4, 6, 6].every(num =>  num % 2 === 0);
//the call back function is the lambda in java
console.log(checkEven)

let checkLength = ["Michael", "Dean", "Oyewole"].every(word => word.length > 2);
//check if the length of every element in the array is greater than 2
console.log(checkLength)

let checkType = ["Michael", "Dean", "Oyewole"].every(word => typeof word === "string");
//check if the type of every element in the array is string
console.log(checkType)




// let addToEachElement = numArray.every(num => num * numArray.indexOf(num))
// console.log(addToEachElement)