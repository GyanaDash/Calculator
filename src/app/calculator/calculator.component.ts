import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void {
  }

  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  public getNumber()
  {

  }

  public getDecimal()
  {

  }

  private doCalculation()
  {

  }

  public getOperation()
  {

  }

  public Clear()
  {

  }

}
