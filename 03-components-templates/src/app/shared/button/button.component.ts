import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[customButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {

}
