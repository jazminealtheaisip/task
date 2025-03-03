import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todos';
import { TodoService } from 'src/app/models/services/todo.service';
@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {
  todos: Todo[]=[]
  constructor(private todoService:TodoService) { }

  ngOnInit(): void { 
    this.todoService.getTodos().subscribe((todos)=>{
        this.todos = todos;
        
      },
      
    )
  }
  

}
