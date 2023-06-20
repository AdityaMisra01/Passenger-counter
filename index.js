// This code is written in JavaScript

// Get the element with the ID "save-el" and store it in the variable saveEl
let saveEl = document.getElementById("save-el")

// Get the element with the ID "count-el" and store it in the variable countEl
let countEl = document.getElementById("count-el")

// Initialize the count variable to 0
let count = 0

// This function increments the count variable by 1 and updates the countEl element with the new count value
function increment() {
    count += 1
    countEl.textContent = count
}

// This function saves the current count value to the saveEl element and resets the count variable and countEl element to 0
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}