import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { InvestmentService} from "../investment.service";
import {InvestmentResultsInterface} from "../investment-results/investment-results.interface";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
   enteredInitialInvestment= signal<string>('0');
   enteredAnnualInvestment= signal<string>('0');
   enteredExpectedReturn= signal<string>('5');
   enteredDuration= signal<string>('10');

  constructor(private _InvestmentResultsService: InvestmentService) {}

  onSubmit() {
    this._InvestmentResultsService.calculateInvestmentResults({
        initialInvestment: +this.enteredInitialInvestment(),
        annualInvestment: +this.enteredAnnualInvestment(),
        expectedReturn: +this.enteredExpectedReturn(),
        duration: +this.enteredDuration()
    })

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');

  }
}
