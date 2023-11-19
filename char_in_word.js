var word = "test";
var match = "t";

// @ i = 0, char = t -> MATCH
console.log('Found the', "t", 'at', 0)

// @ i = 1, char = e -> NO-MATCH
console.log('---No match found at', 1)

// @ i = 2, char = s -> NO-MATCH
console.log('---No match found at', 2)

// @ i = 3, char = t -> MATCH 
console.log('Found the', "t", 'at', 3)

function findMatchInWord(word, match){
    console.log("==================================")
    console.log(word, match)
    console.log("==================================")
    for (let i = 0; i < word.length; i++) {
        if (word[i] === match){
            console.log('Found the', match, 'at', i)
        }else {
            console.log('---No match found at', i)
        }
    }
    console.log("\n")
}
// 1 abbey, y
// 2 tobi, o
// 3 nigeria, i
// 4 united kingdom, n
findMatchInWord("abbey", "y");
findMatchInWord("tobi", "o");
findMatchInWord("nigeria", "i");
findMatchInWord("united kingdom", "n");