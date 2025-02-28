import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todos';
@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

}
