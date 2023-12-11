function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.children[0];
const createBtn = controls.children[1];
const destroyBtn = controls.children[2];
const boxContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
    const amount = input.value;
    if (amount > 0 && amount <= 100) {
        createBoxes(amount);
    }
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    let boxes = "";
    let boxSize = 30;
    for (let i = 0; i < amount; i++) {
        boxes += `<div class="box-item" style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;

        boxSize += 10;
    }

    boxContainer.innerHTML = boxes;

    input.value = "";
}

function destroyBoxes() {
    boxContainer.innerHTML = "";
}
