// essential data
let name = document.getElementById("name")
let email = document.getElementById("email")
let goal = document.getElementById("goal")

// the div
let plan = document.getElementById("day")

// within the div the thing that says the current day
let heading = document.getElementById("heading")


let clearButton = document.getElementById("clear")

// in order to change the heading as each day passes
let curDay = "Monday"
let days = ["Tuesday", "Wednesday", "Thursday", "Friday"]

// logs the data the user inputs for when the new window is created
let data = {
    "Monday": [],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": []
}






function addNewMeal() {
    let whatType = prompt("What meal is this? (Breakfast, Lunch, Snack, Dinner)")
    
    // checks if the user clicked cancel
    if (whatType == null) {
        return
    }

    // create 
    let meal = document.createElement("p")
    meal.textContent = `${whatType}:`
    meal.style.fontSize = "18px"
    meal.style.marginBottom = "0"
    
    let mealType = document.createElement("input")
    mealType.setAttribute("type", "text")
    mealType.setAttribute("placeholder", "Your meal")


    let calories = document.createElement("input")
    calories.setAttribute("type", "number")
    calories.setAttribute("placeholder", "Calorie Count")


    plan.appendChild(meal)
    plan.appendChild(mealType)
    plan.appendChild(calories)
    console.log(plan.childNodes)
}


function clear() {
    let length = plan.childNodes.length
    for (let i = 3; i < length; i++) {
        plan.removeChild(plan.childNodes[i])
    }
}


function generateWindow() {

}

// creates the additional buttons for the additional content for the DLC 
let newMeal = document.createElement("input")
// submits the user inputs per day
let submit = document.createElement("input")
newMeal.setAttribute("type", "button")
submit.setAttribute("type", "button")
submit.value = "Submit"
newMeal.value = "Add new meal"


heading.textContent = curDay

submit.addEventListener("click", function() {
    // pushes the data into the respective day's list in the data library as a list 
    for (let i = 3; i < plan.childNodes.length; i += 3) {
        data[curDay].push([plan.childNodes[i+1].value, plan.childNodes[i+2].value])
    }
    
    // gets rid of the fields
    clear()
    
    // changes the day text
    if (days.indexOf(curDay) != 3) { 
        curDay = days[days.indexOf(curDay) + 1]
        heading.textContent = curDay
    }
    
});

clearButton.addEventListener("click", clear)

newMeal.addEventListener("click", addNewMeal)