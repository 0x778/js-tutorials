// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 3
let secondCard = 9

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the cons ole in both cases
let Age = 21
if (Age < 21){
console.log("You can't enter the club !")
}
else{
console.log()
}
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard

if (sum === 21) {
console.log("Wooow !You Win this  ")
    //win
}

else if (sum < 21){
console.log("Do you want to Draw a card ! ")
    //in
}

else {
    console.log("Your out of the game !")
//out
}
