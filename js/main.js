const main = document.getElementById('main');

class Calculator {
    constructor() {
        this.operators = ["+", "-", "*", "/"]
    }
    view() {
        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        const displayRow = document.createElement('div');
        displayRow.setAttribute('class', 'row');
        const display = document.createElement('div');
        display.setAttribute('class', 'col-12 border');
        display.innerHTML = 0;

        main.appendChild(container).appendChild(displayRow).appendChild(display);

        const numBtnBox = document.createElement('div');
        numBtnBox.setAttribute('class', 'row');
        container.appendChild(numBtnBox);

    }
}

class Button {
    constructor(id) {
        this.id = id;
    }

}

const calc = new Calculator();
calc.view();