class ShopManager {
    name = "";
    salary = 0;
    age = 0;
    bonus = 0;

    constructor(name, salary, age){
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.bonus = this.salary * 20/100;
    }

    sendMail(message){
        console.log("Email sent to ", this.name, " = ", message)
    }

    call(){
        console.log("Calling ", this.name, "...")
    }
}

// Class initialization
var web = new ShopManager("Saheed", 80000, 30);