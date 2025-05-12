import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { User } from './user.model'
import { CardComponent } from "../shared/card/card.component";
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // avatar = input.required<string>();
  // name = input.required<string>();
  @Input({ required: true }) user!: User;
  @Input ({required: true}) isSelected! : boolean;
  @Output() abc = new EventEmitter<string>();

  // imagePath = computed( () =>
  // {
  //   return 'assets/users/' + this.avatar;
  // });

  get imagePath() { return './assets/users/' + this.user.avatar };


  onSelectUser() {
    this.abc.emit(this.user.id);
  }

}
