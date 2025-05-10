import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() canceled = new EventEmitter<void>();
@Output() submitted = new EventEmitter<NewTask>(); 
newTaskTitle = '';
newTaskSummary = '';
newTaskDueDate = '';
onCancelButtonClick()
{
  this.canceled.emit();
}

onSubmitButtonClick()
{
  this.submitted.emit({
    title: this.newTaskTitle,
    summary: this.newTaskSummary,
    dueDate: this.newTaskDueDate
  });
}

}

