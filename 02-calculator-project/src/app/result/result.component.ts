import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
@Input() outputToDisplay? : { initialInvest: number, annualInvest: number, ret: number, dur: number }[]
}
