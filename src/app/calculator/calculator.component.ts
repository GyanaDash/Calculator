import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  public getNumber(number: string)
  {
    console.log(number);
    if (this.waitForSecondNumber)
    {
      this.currentNumber = number;
      this.waitForSecondNumber = false;
    }
    else
    {
      this.currentNumber === '0'
        ? (this.currentNumber = number)
        : (this.currentNumber += number);
    }
  }

  public getDecimal()
  {
    if (!this.currentNumber.includes('.'))
    {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op, secondOp)
  {
    switch (op)
    {
      case '+':
        return (this.firstOperand += secondOp);
      case '-':
        return (this.firstOperand -= secondOp);
      case '*':
        return (this.firstOperand *= secondOp);
      case '/':
        return (this.firstOperand /= secondOp);
      case '=':
        return secondOp;
    }
  }

  public getOperation(op: string)
  {
    console.log(op);

    if (this.firstOperand === null)
    {
      this.firstOperand = Number(this.currentNumber);
    }
    else if (this.operator)
    {
      const result = this.doCalculation(
        this.operator,
        Number(this.currentNumber)
      );
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }

  public Clear()
  {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
