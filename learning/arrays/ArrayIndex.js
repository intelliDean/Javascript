function indexArray() {
    let numArray = [23, 54, 12, 65, 34];
    for (let i = 0; i < numArray.length; i++) {
        numArray[i] *= i;
    }
    return numArray;
}

console.log(indexArray());