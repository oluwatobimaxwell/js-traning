class Governor {
    // Variables of a class or data properties
    name = "";
    state = "";
    party = "";
    tenureStartDate = new Date();
    
    constructor(name, state, party, tenureStartDate){
        this.name = name;
        this.state = state;
        this.party = party;
        this.tenureStartDate = new Date(tenureStartDate);
    }

    // Function in a class or a method
    hasTenureEnded() {
        let yearDifference = new Date().getFullYear() - this.tenureStartDate.getFullYear();
        return yearDifference >= 4;
    }
}

class President {
    name = "";
    country = "";
    party = "";
    tenureStartDate = new Date();
}

var sanwoOlu = new Governor("San Olu", "Lagos", "APC", "10/11/2020"); // Object sanwoOlu of class Governor
var adeleke = new Governor("Adeleke", "Osun", "PDP", "10/09/2008"); // Object adeleke of class Governor

var tinubu = new President();
var biden = new President();

console.log("San Olu tenure ended: ", sanwoOlu.hasTenureEnded());
console.log("Adeleke tenure ended: ", adeleke.hasTenureEnded());

// Assignment: Let's also be able to check if the tenure of a president has ended or not, just like we did for that of a governor.
// Research on class inheritance and try the assignment with inheritance


