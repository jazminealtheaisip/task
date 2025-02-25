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
  totalCount: number = 0;
  categoryCounts: {[key:string]: number}={}
  
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
    this.todoService.getCountCategories().subscribe(({categoryCounts, totalCount})=>{
      this.categoryCounts=categoryCounts;
      this.totalCount = totalCount;
    });
  }
  
  
}
