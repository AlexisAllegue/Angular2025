import { Inject, inject, Injectable } from "@angular/core";
import { NewTask } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private dummyTasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
                'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
                'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ]

    getUserTasks(userId: string) {
        return this.dummyTasks.filter((x) => x.userId === userId);
    }

    deleteUserTask(taskId: string) {
        this.dummyTasks = this.dummyTasks.filter((x) => x.id !== taskId);
    }

    addUserTask(userId: string, newTask: NewTask) {
        this.dummyTasks.unshift(
            {
                id: new Date().getTime().toString(),
                title: newTask.title,
                summary: newTask.summary,
                dueDate: newTask.dueDate,
                userId: userId
            }
        );

    }
}