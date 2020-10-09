const main = document.getElementById('main');

let start = [0];

const container = document.createElement('div');
container.setAttribute('class', 'container');
const displayRow = document.createElement('div');
displayRow.setAttribute('class', 'row');
const display = document.createElement('div');
display.setAttribute('class', 'col-12 border');
display.innerHTML = start;

main.appendChild(container).appendChild(displayRow).appendChild(display);

const numBtnBox = document.createElement('div');
numBtnBox.setAttribute('class', 'row');
container.appendChild(numBtnBox);

for (let i = 0; i <= 9; i++) {
    const numBtn = document.createElement('div');
    numBtn.setAttribute('class', 'col-4 border border-danger');
    numBtn.setAttribute("id", i);
    numBtn.innerHTML = i;
    numBtnBox.appendChild(numBtn);
    numBtn.addEventListener("click", (e) => {
        start.push(e.target.id);
        let dis = start.join(' ');
        display.innerHTML = dis;
        console.log(e.target.id)

    })
}
