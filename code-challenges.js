// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//create a function that takes a string
const code_Message = (str) => {
//converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
 let newString = str.replace("a", "4").replace("e", "3").replace("i", "1").replace("o", "0").replace("oo", "00")
 //returns a coded message
    return newString
}
console.log(code_Message(secretCodeWord1))
console.log(code_Message(secretCodeWord2))


// const secretCode = (string) => {
//     let code = {'a':'4','e':'3','i':'1', 'o':'0'}
//     let message = string.replace(/[aeio]/g)
//     return message
// }
// console.log(secretCode(secretCodeWord1))
// console.log(secretCode(secretCodeWord2))



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

//create a function that takes an array
const aWords = (array) => {
//returns all the words that contain the letter a
    return array.filter(value => value.toLowerCase().includes("a"))  
   }

   console.log(aWords(arrayOfWords))



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [3, 5, 3, 5, 3]
// Expected output: true

//Create a function that takes in an array
const pokerFace = (array) => {
    let org = array.sort((a, b) => a - b)
    for(var i = 0; i < org.length; i++){
        if(array[i] === array[i+1] && array[i] === array[i+2]){
        //test print
        return "TRUE"
     } else {
         return "FALSE"
     }
    }
}

console.log(pokerFace(hand1))
console.log(pokerFace(hand2))
console.log(pokerFace(hand3))
console.log(pokerFace(hand4))


// STRETCH:
var hand5 = ["K", 5, "K", 5, "K"]
// Expected output: true
var hand6 = ["A", "Q", "A", 5, 3]
// Expected output: false


// const fullHouse = (arr) => {
//     let countObj = {}
//     for(let x of arr){
//       countObj[x] = (countObj[x] || 0) + 1;
//     }
//     let vals = Object.values(countObj);
//     if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
//       return true;
//     }
//     return false;
//   }

// console.log(pokerFace(hand5))
// console.log(pokerFace(hand6))
