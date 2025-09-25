
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

function updateDisplay() {
    display.value = currentInput;
}

buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            updateDisplay();
            // display.value = "";
        }
        else if (value === "⌫") {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
          
        } else if (value === "=") {
              try {
                currentInput = eval(currentInput).toString();
                updateDisplay();
                // display.value = currentInput;
            } catch {
                display.value = "ERROR";
            }
        }
        else {
            currentInput += value;
            updateDisplay();
            // display.value = currentInput;
        }
    });
});

//keyboard support
document.addEventListener("keydown", (Event) => {
    if((Event.key >= "0" && Event.key <= "9") || ["+", "-", "*", "/", "."].includes(Event.key)) {
        currentInput += Event.key;
        updateDisplay();
    }
    else if (Event.key === "Enter") {
        try {
            currentInput = eval(currentInput).toString();
            updateDisplay();
        } catch {
            display.value = "Error";
        }
    }
    else if (event.key === "Backspace") {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }
})