import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() canceled = new EventEmitter<void>();
newTaskTitle = '';
newTaskSummary = '';
newTaskDueDate = '';
onCancelButtonClick()
{
  this.canceled.emit();
}

onSubmit()
{
  
}

}

