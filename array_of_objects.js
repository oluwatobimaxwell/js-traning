var GM1 = {
    name: "Adeshola Tope",
    salary: 60000,
    shops: ["Checkpoint", "T-Junction", "New-Sharp-Corner"],
    basedShop: "New-SharpCorner",
    age: 25,
    graduate: true,
};

var GM2 = {
    name: "Lawal Saheed",
    salary: 80000,
    shops: ["New-Mammy", "New-Checkpoint", "Baba street"],
    basedShop: "New-Mammy",
    age: 33,
    graduate: false,
};

var GM3 = {
    name: "Omodiale Jude",
    salary: 60000,
    shops: ["Mammy", "Maraba-Junction", "Heart-Plaza"],
    basedShop: "Maraba-Junction",
    age: 26,
    graduate: false,
};

var GM4 = {
    name: "Sowemimo Oluwaseyi",
    salary: 70000,
    shops: ["JFK", "New-Banex", "Aso"],
    BasedShop: "JFK",
    age: 33,
    graduate: true,
};

var GM5 = {
    name: "Onwuzurike Chidimma",
    salary: 60000,
    shops: ["Sharp-Corner", "Omega"],
    basedShop: "Sharp-Corner",
    age: 30,
    graduate: true,
};

var GM6 = {
    name: "Benard Emmanuel",
    salary: 60000,
    shops: ["Tasha", "New-Health", "Calvary"],
    basedShop: "Tasha",
    age: 27,
    graduate: false,
};

var GM7 = {
    name: "Sanjo Samuel",
    salary: 40000,
    shops: ["Usiju", "kabayi-field", "New-Aso"],
    basedShop: "Usiju",
    age: 33,
    graduate: true,
};

var GM8 = {
    name: "Christopher Emmanuel",
    salary: 40000,
    shops: ["Old-Banex", "Primary-Health-care", "Pulaku"],
    basedShop: "Old-Banex",
    age: 28,
    graduate: true,
};

var GM9 = {
    name: "Abubakar Shaibu",
    salary: 30000,
    shops: ["Lafia 1", "Lafia 2", "Lafia 3"],
    basedShop: "Lafia 3",
    age: 27,
    graduate: false,
};

var GM10 = {
    name: "Abdulrazaq  Olabamiji",
    salary: 60000,
    shops: ["Emab", "Midland", "Back-of-Aso"],
    basedShop: "Emab",
    age: 36,
    graduate: true,
};

var employees = [GM1, GM2, GM3, GM4, GM5, GM6, GM7, GM8, GM9, GM10];
var totalSalary = 0;
var totalBonus = 0;

for (let i = 0; i < employees.length; i++) {
    // Add current employee salary to totalSalary
    totalSalary += employees[i].salary;

    // Estimate bonus 
    var currentEmployeeBonus = employees[i].salary * 20/100;
    // Update current employee data
    employees[i].bonus = currentEmployeeBonus;
    // Add current employee bonus to totalBonus
    totalBonus += currentEmployeeBonus;
}

console.log(employees);
console.log(" Total Salary is: ", totalSalary);
console.log(" Total Bonus is: ", totalBonus);
