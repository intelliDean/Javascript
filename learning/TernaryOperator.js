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

isLoggedInFromTwitter && loggedInCount <= 0
    ? console.log("You are logged in", ++loggedInCount, "time(s)")
    : console.log("You are not logged in")
