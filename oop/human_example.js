class Human {

    name = "";
    email = "";
    address = "";

    constructor(name, email, address){
        this.name = name;
        this.email = email;
        this.address = address;
    }

    verify(email) {
        return this.email === email;
    }
}



const tobi = new Human("Tobi", "tobi@gmail.com", "Helsinki");
const abbey = new Human("Abbey", "abbey@gmail.com", "London");
const moyin = new Human("Moyin", "moyin@gmail.com", "Abuja");

// Let's verify if Abbey email address is "abbey@gmail.com"
console.log("Is Abbey email `abbey@gmail.com?`", abbey.verify("abbey@gmail.com"));
console.log("Is Abbey email `abbey@gmail.com?`", abbey.verify("abbey2@gmail.com"));
console.log("Is Tobi email `abbey@gmail.com?`", tobi.verify("abbey2@gmail.com"));