import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { UserInput } from './user-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {
  calculateOutput(data: UserInput) {
    //destructuring
    const { initialInvest, annualInvest, ret, dur } = data;

    const annualData = [];
    let investmentValue = initialInvest;

    for (let i = 0; i < dur; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (ret / 100);
      investmentValue += interestEarnedInYear + annualInvest;
      const totalInterest =
        investmentValue - annualInvest * year - initialInvest;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvest: annualInvest,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvest + annualInvest * year,
      });
    }
    console.log(annualData);


  }


}
