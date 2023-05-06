// let names = ["Michael", "Dean", "Oyewole"];
// let ages = new Array(12, 43, 54);
//
// for (let i = 0; i < ages.length; i++) {
//     console.log(`Name: ${names[i]}\nAge: ${ages[i]}\n`);
// }
//
// names.pop();        //this removes the element at the end of the array
// console.log(names);
//
// console.log(Array.from("Madam"))
//
// console.log(names.indexOf("Dean"));
//
// names.unshift("Oluwatobi")       //this adds element at the end of the array
// console.log(names);
//
// names.shift()        //this deletes the element at the beginning of the array
// console.log(names);
//
//
// console.log(Array.from("1234567890"));


let info = ["Michael", "Dean", 23, "20, Holmes, Banana Island", "Software Engineer"].unshift("Oyewole")
//this is supposed to return all, but it's returning the length instead
console.log(info);