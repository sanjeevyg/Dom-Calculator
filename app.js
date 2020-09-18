const screen = document.getElementById("screen")
const buttonContainer = document.getElementById("buttons-container")
const buttons = buttonContainer.getElementsByClassName("buttons")
const span = document.querySelectorAll("span")
const operator = document.querySelectorAll(".operator")
const equal = document.querySelector("#equals")
const clear = document.querySelector("#clear")



function appendToScreen() {
    buttonContainer.addEventListener("click", (event) => {    
        if (event.target.textContent != clear.textContent && event.target.textContent != equal.textContent && event.target.textContent != "x" && 
        event.target.textContent != "÷") {
            screen.textContent = screen.textContent + event.target.textContent
        } else if (event.target.textContent == "x") {
            screen.textContent = screen.textContent + "*"
        } else if (event.target.textContent == "÷") {
            screen.textContent = screen.textContent + "/"
        } else if (event.target == equal) {
            screen.textContent = eval(screen.textContent)
            if (screen.textContent == "Infinity") {
                screen.textContent = "Error"
            } else if (screen.te) {
                screen.textContent = "Error"
            }
        } else if (event.target == clear) {
            screen.textContent = ""                  
      } 
      console.log(screen.textContent)  
})}

appendToScreen()