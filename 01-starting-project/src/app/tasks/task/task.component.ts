import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Task} from './task.model'
import { TasksService } from '../tasks.service';
import { CardComponent } from '../../shared/card/card.component';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) task!: Task
@Output() completed = new EventEmitter<string>();

constructor(private tasksSerivce: TasksService)
{

}

onTaskCompleted()
{
  // this.completed.emit(this.task.id);
  this.tasksSerivce.deleteUserTask(this.task.id);
}
}
