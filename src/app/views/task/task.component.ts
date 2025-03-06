import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from 'src/app/models/todos';
import { Category } from 'src/app/models/categories';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/models/services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  todos: Todo[] = [ ]; 
  categories = ['Todo', 'Pending', 'Ongoing', 'Completed'];
  text = '';

  addTodoRequest: Todo = {
    id: 0,
    taskName: '',
    taskStatus: '',
    dateAdded: new Date(),
  }
  
  taskStatus = Object.values(Category);

  selectedCategory: string = this.categories[0];

  constructor(private todoService:TodoService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    
  }

  onCategoryChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCategory = selectedValue;
  }

  addTodo(){
    if (!this.addTodoRequest.taskName ) {
      alert("Task cannot be empty!");
      console.error('TaskName is required');
      return;
    }
    
    this.addTodoRequest.taskStatus = this.selectedCategory;
    this.todoService.addTodo(this.addTodoRequest).subscribe({
      next: () => {
        this.addTodoRequest.taskName = '';
        this.selectedCategory = 'Todo';
        this.todoService.getTodos().subscribe(); 
        this.todoService.triggerCountRefresh();
        this.snackBar.open('New Task Added!', 'Close', {
          duration: 3000,
        })
    },
    error: (response) => {
      console.log(response);
    }
  })
    console.log(this.addTodoRequest)
  }  

  
  
}
