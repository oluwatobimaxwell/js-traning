function printSurfaceArea(x, y){
    var width = x;
    var height = y;
    var area = width * height;
    console.log("Surface area of: ("+x+" x "+y+") is: "+area);
}

function printSquareOfValue(value, i){
    var square = value * value;
    console.log("("+i+") Square of "+value+" is: "+square);
}

// Find square of each array member
var values = [2, 4, 5, 6, 7, 8];

// for(var i = 0; i < values.length; i++){
//     var currentValue = values[i];
//     printSquareOfValue(currentValue, i);
// }


var cashiers = ["Chidima", "Moyin", "Tobi", "Saheed", "Ayo", "Abbey"];

var i = 0;
console.log(i, cashiers[i]) // Chidima
i++;
console.log(i, cashiers[i]) // Moyin
i++;
console.log(i, cashiers[i]) // Tobi
i++;
console.log(i, cashiers[i]) // Saheed
i++;
console.log(i, cashiers[i]) // Ayo
console.log('\n')
for(var i = 0; i < cashiers.length; i++){
    var cashier = cashiers[i];
    if (cashier === "Abbey"){
        console.log(i, cashiers[i], "(This is Oga Abbey)");
    } else if (cashier === "Chidima" || cashier === "Saheed"){
        console.log(i, cashiers[i], "(Shop Manager)");
    } else {
        console.log(i, cashiers[i]);
    }
}