let user = {
    firstName: "Michael",
    lastName: "Dean",
    age: 23,
    listOfBabes: [],


    toastBabe: function (babeName) {
        this.listOfBabes.push(babeName);
    },

    getGirlfriends() {
        return this.listOfBabes.length > 0
            ? this.listOfBabes.length === 1
                ? `${this.firstName + " " + this.lastName} have only ${this.listOfBabes.length} babe. Her name is ${this.listOfBabes}`
                : `${this.firstName + " " + this.lastName} have ${this.listOfBabes.length} babes. They are ${this.listOfBabes}`
            : `${this.firstName + " " + this.lastName} does not have any babe`;
    }
}


console.log(user.getGirlfriends());
user.toastBabe("Ajoke");
console.log(user.getGirlfriends());
console.log()
user.toastBabe("Adewunmi");
console.log(user.getGirlfriends());
console.log()
user.toastBabe("Esther");
console.log(user.getGirlfriends());
console.log()
user.toastBabe("Oluwatoyin");
console.log(user.getGirlfriends());