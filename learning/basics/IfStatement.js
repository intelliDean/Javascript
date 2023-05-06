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

if (age > 20 && password === confirmPassword) {
    isLoggedInFromTwitter = true
}

if (isLoggedInFromTwitter && loggedInCount <= 0) {
    loggedInCount += 1
}

console.log(isLoggedInFromTwitter)
console.log(loggedInCount)
