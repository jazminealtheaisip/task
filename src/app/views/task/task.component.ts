import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from 'src/app/models/todos';
import { Category } from 'src/app/models/categories';
import { TodoService } from 'src/app/models/services/todo.service';
import{v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  
  categories = ['Todo', 'Pending', 'Ongoing', 'Completed'];

  addTodoRequest: Todo = {
    id: '',
    taskName: '',
    taskStatus: '',
    dateAdded: new Date(),
  }
  
  taskStatus = Object.values(Category);

  selectedCategory: string = this.categories[0];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  addTodo(){
    this.todoService.addTodo(this.addTodoRequest).subscribe({
      next: (todos)=>{
        console.log(todos)
      },
      error:(response) => {
        console.log(response);
      }
    })
    
    /* console.log(this.addTodoRequest)
    this.addTodoRequest.taskStatus = this.selectedCategory; */
  }

  onCategoryChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedCategory = selectedValue;
  }
  
}
