let numbers = [34, 24, 89, 16, 98, 54, 12, 4];
let result = numbers.filter(num => num % 2 === 0)
                            .filter(newNum => newNum > 20 && newNum < 60);

console.log(result);