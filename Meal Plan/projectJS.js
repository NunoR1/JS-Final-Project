// essential data
let name = document.getElementById("name")
let email = document.getElementById("email")
let goal = document.getElementById("goal")
// the div that contains everything
let plan = document.getElementById("day")
// button that clears the screen
let clearButton = document.getElementById("clear")
// button that generates the new window
let generator = document.getElementById("generate")

function clear() {
    let length = plan.childNodes.length
    for (let i = 3; i < length; i++) {
        plan.removeChild(plan.childNodes[i])
    }
}

function generateWindow() {

}