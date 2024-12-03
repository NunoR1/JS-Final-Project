// essential data
let personName = document.getElementById("name")
let email = document.getElementById("email")
let goal = document.getElementById("goal")
// the div that contains everything
let plan = document.getElementById("day")
// button that clears the screen
let clearButton = document.getElementById("clear")
// I use it as a detector for when the form is submitted so I named it appropriately
let generator = document.getElementById("theForm")


function clear() {
    // the amount of child nodes in the div
    let length = plan.childNodes.length
    // the input nodes start at the seventh index of the div so that is the first i value and every consequent input field is 8 indexes away
    for (let i = 7; i < length; i += 8) {
        plan.childNodes[i].value = ""
    }
}

function generateWindow() {
    // makes it easier to make table headers
    let days = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    // makes it easier to name rows
    let meals = ["Breakfast", "First Snack", "Lunch", "Second Snack", "Dinner"]
    // the new window that will be opened
    let newWindow = window.open()

    
    
    // the information will be contained in a table
    let thePlan = "<table border = 3 style=\"border: 2px solid; width: 100%\">"
    
    // creates headers with the appropriate days
    for (let i = 0; i < days.length; i++) {
        thePlan += `<th>${days[i]}</th>`
    }
    
    for (let i = 0; i < meals.length; i++) {
        thePlan += "<tr>" // create new row
        thePlan += `<th>${meals[i]}</th>` // first column is the meal
        for (let o = 0; o < days.length - 1; o++) {  // every day is a column
            thePlan += `<td style="text-align: center;">${plan.childNodes[7 + (8 * i)].value}</td>` // the 7th child node is the first input field and every 8 subsequent indexes is a new input field
        }
        thePlan += "</tr>" // close row
    }
    
    // closes the table
    thePlan += "</table><br>"
    
    // the title of the page
    newWindow.document.write(`<title>Meal Plan</title>`)
    
    // use the required data
    newWindow.document.write(`<h1 style="text-align: center; margin-bottom: 0px;">${personName.value}'s Meal Plan</h1>`)
    newWindow.document.write(`<p style="text-align: center; margin-top: 0px;">${email.value}</p>`)
    newWindow.document.write(`<h2 style="text-align: center;">Goal: ${goal.value}</h2>`)

    // writes the entire table to the new window
    newWindow.document.write(thePlan)

    // create the printing button
    let printingButton = newWindow.document.createElement("button")
    printingButton.textContent = "PRINT/DOWNLOAD"
    printingButton.setAttribute("type", "button")
    // this works
    printingButton.setAttribute("onclick", "window.print()")
    
    // append it to the body
    newWindow.document.body.appendChild(printingButton)
}


clearButton.addEventListener("click", clear)

generator.addEventListener("submit", function() {
    generateWindow()
})