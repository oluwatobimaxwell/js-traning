// To be stored
var nameOfManager = "Tobi Sholanke";
var managerSalary = 50000;
var managedShops = ["Banex", "Omega", "T-Junction"];
var baseShop = "Banex";


// To be stored
var nameOfManager = "Tope Adelaja";
var managerSalary = 60000;
var managedShops = ["Abacha Road", "Kabayi"];
var baseShop = "Kabayi";

// var object_name = {
//     propery_key: property_value
// }


// JSON -> JavaScript Object Notation

try{
    var tobi = {
        name: "Tobi Sholanke",
        salary: 50000,
        shops: ["Banex", "Omega", "T-Junction"],
        baseShop: "Banex"
    }
    var tope = {
        name: "Tope Adelaja",
        salary: 60000,
        shops: ["Abacha Road", "Kabayi"],
        baseShop: "Kabayi"
    }
    var moyin = {
        name: "Moyin Sholanke",
        salary: 70000
    }
    var managers = [tobi, tope, moyin]
    console.log(managers)
}catch(e){
    console.log("Error occured: "+e.message)
}
