import { Component } from '@angular/core';
import { Task } from '../../model/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks: Task[] = [
    { title: 'Task One', description: 'Description for task one', status: 'To Do' },
    { title: 'Task Two', description: 'Description for task two', status: 'In Progress' },
    { title: 'Task Three', description: 'Description for task three', status: 'Done' },
  ];

  newTask: Task = {
    title: '',
    description: '',
    status: ''
  };

  errorMessage = '';
  showAlert: boolean = false;

  addTask() {
    if (!this.newTask.title || !this.newTask.description || !this.newTask.status) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    this.errorMessage = '';

    if (this.newTask.title && this.newTask.description) {
      this.tasks.push({ ...this.newTask });
      this.newTask = { title: '', description: '', status: '' };
    }

    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 4000);
  }
}