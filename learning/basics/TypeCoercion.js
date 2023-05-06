name = "Dean";
age = "12";

//loose type coercion
if (12 == age) {
    console.log("12 is not age but it is allowed to passed because Javascript assumes I mean that")
}

//strict type coercion

if (age === "12") {
    console.log("Age is 12")
}