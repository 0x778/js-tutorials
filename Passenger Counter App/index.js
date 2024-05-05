//initial a variable for count passeneger
let count = 0 
let countEl = document.getElementById("count-el")
// increment the coumter using increment btn

function increment(){
    count++
    countEl.innerText = count
 }

 let saveEl = document.getElementById("save-el")
 function save(){
    let saveVar = count +  " - "
    saveEl.innerText = saveEl.innerText + saveVar

 }
