let equal_pressed = 0;
// all inout button except C DEL =
let button_input = document.querySelectorAll(".input-button");

// acces input, equal, clear, and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

// acces each class using foreach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () =>{
        if (equal_pressed == 1) {
            input.value = ""
            equal_pressed = 0
        }
        // display value
        input.value += button_class.value
    })
})

// solving
equal.addEventListener("click", () => {
    equal_pressed = 1
    let inp_val = input.value
    try {
        // evaluate user's input
        let solution = eval(inp_val)
        if (Number.isInteger(solution)) {
            input.value = solution
        } else {
            input.value = solution.toFixed(2)
        }
    } catch (error) {
        input.value = "Invalid Input"
    }
})

// C button
clear.addEventListener("click", () => {
    input.value = ""
})

// DEL button
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length -1)
})
