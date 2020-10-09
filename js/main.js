const main = document.getElementById('main');
let num = ['0'];

class Calculator {
    constructor() {
        this.operators = ["+", "-", "*", "/", "=", "AC"];
        this.display = null;
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
        display.innerHTML = num;
        this.display = display;

        main.appendChild(container).appendChild(displayRow).appendChild(display);

        const numBtnBox = document.createElement('div');
        numBtnBox.setAttribute('class', 'row');
        container.appendChild(numBtnBox);

        for(let i = 0; i <= 9; i++) {
            let numBtn = new Number(i, display); //<= HELLO this is where display gets passed to Child
            numBtn.btnAction();
            numBtnBox.appendChild(numBtn.col);
        }

        for(let i = 0; i < this.operators.length; i++) {
            let oppBtn = new Operator(this.operators[i]);
            oppBtn.makeBtn();
            numBtnBox.appendChild(oppBtn.col);
        }

    }

    calculate() {
        let calcArr = [];
    }
}

class Button {
    constructor(id) {
        this.id = id;
        this.col = null;
        // this.childFunction = this.childFunction.bind(this);
    }

    // childFunction() {
    //     console.log(this.data);
    // }

    makeBtn() {
        let btn = document.createElement('div');
        btn.setAttribute('id', this.id);
        btn.setAttribute('class', 'col-3 border')
        btn.innerHTML = this.id;
        this.col = btn;
    }

    

   
}

class Number extends Button { 
    constructor(id, displayFromParent) {
    super(id);
    this.display = displayFromParent
    this.numBtnAction = this.numBtnAction.bind(this);
    }
        btnAction() {
            this.makeBtn();
            console.log(`Number: ${this.id}`);
            this.col.addEventListener('click', this.numBtnAction);

        }

        numBtnAction() {
            num.push(this.id);
            let displayNum = num.join(' ');
            this.display.innerHTML = displayNum;
            console.log(this.id);
        }
    }

//if I have my makebtn method, how do I sub in extra lines?


class Operator extends Button {
    constructor(id){
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

const calc = new Calculator();
calc.view();

