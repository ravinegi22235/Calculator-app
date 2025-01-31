const button = document.querySelectorAll("button");
const result = document.getElementById("result");
const on=document.getElementsByClassName("operator").value

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        const buttonValue = button[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    result.value = eval(result.value);
    console.log(result.value)
}

function appendValue(buttonValue) {
    result.value += buttonValue;
    

}