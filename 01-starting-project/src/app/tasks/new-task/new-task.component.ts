import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() canceled = new EventEmitter<void>();
// @Output() submitted = new EventEmitter<NewTask>(); 
@Input({ required: true }) userId!: string;

newTaskTitle = '';
newTaskSummary = '';
newTaskDueDate = '';

private tasksService = inject(TasksService);

onCancelButtonClick()
{
  this.canceled.emit();
}

onSubmitButtonClick()
{
  // this.submitted.emit({
  //   title: this.newTaskTitle,
  //   summary: this.newTaskSummary,
  //   dueDate: this.newTaskDueDate
  // });

  this.tasksService.addUserTask(this.userId, {
    title: this.newTaskTitle,
    summary: this.newTaskSummary,
    dueDate: this.newTaskDueDate
  })

  this.canceled.emit();
}

}

