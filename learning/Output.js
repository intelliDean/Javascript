var fullName = "MIchael Dean"
var age = 23
let phoneNumber = "09049488574"
const id = "MED123"
var address = "12, Mangoro street, Lokoja"
var email = "dean@gamil.com"
var password = "password"
var confirmPassword = "password"
var loggedInCount = 0
var isLoggedInFromTwitter = false

console.log("This is one way to display: ", fullName)
console.log("This is another way: " + age)

console.log("But this is better for large outputs at the same time")

console.log(`
    Full Name:  ${fullName}
    Phone Number:   ${phoneNumber}
    Address:    ${address}
    Email:  ${email}
    Logged In From Twitter?:    ${isLoggedInFromTwitter}
`)