
/*TODO: Function declaration are scanned and made available
        Variable declaration are scanned and made undefined
 */

console.log(addNumber(4.8));
/*TODO: Global context made it possible for this function to be invoked before declaration
   the global context scans the function declaration and makes it available  */

function addNumber(number) {
    return (parseFloat(number)) * 4
}

let result =  function (number) {
    return parseFloat(number) * 12
}
console.log(result(23));
//TODO: this function cannot be called because it's a variable and global context scans
// the variable declaration and makes it undefined



/*TODO: Execution context is responsible for execution, either a function or a console.log
        Global context keeps information of anything about everything
*  */