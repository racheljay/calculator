const main = document.getElementById('main');


class Calculator {
    constructor() {
        this.operators = ["+", "-", "*", "/"];
        // this.clear = "AC"
        this.display = null;
        this.num = [0];
    }


    view() {
        //make the calc display 
        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        const displayRow = document.createElement('div');
        displayRow.setAttribute('class', 'row');
        const display = document.createElement('div');
        display.setAttribute('class', 'col-12 border');
        //how do I get this variable to come visit me in Button.btnAction()?
        // let num = ['0'];
        display.innerHTML = this.num;
        this.display = display;

        main.appendChild(container).appendChild(displayRow).appendChild(display);

        const numBtnBox = document.createElement('div');
        numBtnBox.setAttribute('class', 'row');
        container.appendChild(numBtnBox);

        //make the number buttons
        for (let i = 0; i <= 9; i++) {
            let numBtn = new Number(i, display, this.num); //<= HELLO this is where display gets passed to Child
            numBtn.btnAction();
            numBtnBox.appendChild(numBtn.col);
        }

        //make the operator buttons
        for (let i = 0; i < this.operators.length; i++) {
            let oppBtn = new Operator(this.operators[i]);
            oppBtn.makeBtn();
            numBtnBox.appendChild(oppBtn.col);
        }

        //make a clear button
        let clearBtn = new Clear("AC", display, this.num);
        clearBtn.btnAction();
        numBtnBox.appendChild(clearBtn.col);

    }


    calculate() {
        let calcArr = [];
    }
}

class Button {
    constructor(id) {
        this.id = id;
        this.col = null;
    }

    makeBtn() {
        let btn = document.createElement('div');
        btn.setAttribute('id', this.id);
        btn.setAttribute('class', 'col-3 border')
        btn.innerHTML = this.id;
        this.col = btn;
    }


}

class Number extends Button {
    constructor(id, displayFromParent, numFromParent) {
        super(id);
        this.display = displayFromParent
        this.numFromParent = numFromParent;
        this.numBtnAction = this.numBtnAction.bind(this);
    }
    btnAction() {
        this.makeBtn();
        //console.log(`Number: ${this.id}`);
        this.col.addEventListener('click', this.numBtnAction);

    }

    numBtnAction() {
        this.numFromParent.push(this.id);
        if (this.numFromParent[0] === 0) {
            this.numFromParent.shift();
            // return this.numBtnAction;
        }
        console.log(this.numFromParent);
        let displayNum = this.numFromParent.join(' ');
        this.display.innerHTML = displayNum;
        console.log(this.id);
    }
}

//if I have my makebtn method, how do I sub in extra lines?


class Operator extends Button {
    constructor(id) {
        super(id)
    }

    btnAction() {
        console.log(`Operator: ${this.id}`)
        this.col.addEventListener('click', this.oppBtnAction);

    }

    oppBtnAction() {
        calcArr.push(displayNum);
        calcArr.push(this.id);
        console.log(this.id);
    }
}

class Clear extends Button {
    constructor(id, displayFromParent, numFromParent) {
        super(id);
        this.display = displayFromParent;
        this.numFromParent = numFromParent;
        this.clearBtnAction = this.clearBtnAction.bind(this);
    }
    btnAction() {
        this.makeBtn();
        //console.log(`Number: ${this.id}`);
        this.col.addEventListener('click', this.clearBtnAction)
    }

    clearBtnAction() {
        if (this.numFromParent !== 0) {
            this.numFromParent = [0]
            this.display.innerHTML = [0]
            // return this.numBtnAction;
        }
       console.log(this.id) 
    }
}


const calc = new Calculator();
calc.view();

