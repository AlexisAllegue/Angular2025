import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { UserInput } from '../user-input.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitInvest = '0';
  enteredAnnualInvest = '0';
  enteredReturn = '5';
  enteredDuration = '0';

  @Output() userInput = new EventEmitter<UserInput>();
  

  onSubmit() {
    this.userInput.emit({ initialInvest: +this.enteredAnnualInvest, annualInvest: +this.enteredAnnualInvest, ret: +this.enteredReturn, dur: +this.enteredDuration })
  }

}
