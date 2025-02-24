import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todos';
import { Category } from '../../models/categories';
import {TodoService } from '../../models/services/todo.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  todos: Todo[] = []

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
    this.countCategories();
  }
  
  totalCount: number = 0;
  categoryCounts: {[key:string]: number}={}
  
  countCategories(){
    this.categoryCounts = this.todos.reduce((acc, todo) => {
      acc[todo.category] = (acc[todo.category] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
    this.totalCount = this.todos.length;
  }

}
