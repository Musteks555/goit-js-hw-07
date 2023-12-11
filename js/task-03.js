const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    let inputText = event.currentTarget.value.trim();
    if (inputText === "") {
        inputText = "Anonymous";
    }
    nameOutput.textContent = inputText;
});
