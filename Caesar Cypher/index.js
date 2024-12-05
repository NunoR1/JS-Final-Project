// define varibles
let userInput

let output = document.getElementById("output") // the div where the encrypted and decrypted text while be output

let submit = document.getElementById("submit") // submit button

let shiftNum

let shiftDir = document.getElementById("shiftDir") // shift direction button
let shiftDirDisplay = document.getElementById("shiftDirDisplay") // displays current shift direction

let convertType = document.getElementById("convertType") // convert type button
let convertTypeDisplay = document.getElementById("convertTypeDisplay") // displays the current convert type

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] // used to shift 

function encrypt(text) {
    let encryptedText = ""
    for (let i = 0; i < text.length; i++) {
        if (alphabet.indexOf(text[i]) >= 0) {
            // adds the letter in alphabet at the index of the currently selected letter from the user input in alphabet added by the number of shifts; the module is to prevent overflow
            encryptedText += alphabet[(alphabet.indexOf(text[i]) + shiftNum) % 26]
        } else {
            encryptedText += text[i] 
        }
    }
    
    return encryptedText
}


shiftDir.addEventListener("click", function() {
    // changes the display of the words next to the button to the appropriate words
    switch(shiftDirDisplay.textContent) {
        case "Left":
            shiftDirDisplay.textContent = "Right"
            break
        case "Right":
            shiftDirDisplay.textContent = "Left"
            break
    }
    
    // if the direction of the shift is right the alphabet list will be reversed and returns it to normal when clicked again
    alphabet.reverse()
})


convertType.addEventListener("click", function() {
    // changes the display of the words next to the button to the appropriate words
    switch(convertTypeDisplay.textContent) {
        case "Encrypt":
            convertTypeDisplay.textContent = "Decrypt"
            submit.textContent = "Decrypt"
            break
        case "Decrypt":
            convertTypeDisplay.textContent = "Encrypt"
            submit.textContent = "Encrypt"
            break
    }
    
    // if the direction of the covert type is decrypt the alphabet list will be reversed and returns it to normal when clicked again
    alphabet.reverse()
})

submit.addEventListener("click", function(event){
    event.preventDefault()
    // changes the values of the variable to the values of the input fields every time the button is clicked
    shiftNum = parseInt(document.getElementById("shift#").value)
    userInput = document.getElementById("theInput").value.toLowerCase()

    output.textContent = encrypt(userInput)

})