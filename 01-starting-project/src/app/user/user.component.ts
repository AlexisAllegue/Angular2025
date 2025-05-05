import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { User } from './user.model'
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // avatar = input.required<string>();
  // name = input.required<string>();
  @Input({ required: true }) user!: User;
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
