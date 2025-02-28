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
  count: {[key:string]: number}={}
  
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getCount().subscribe({
      next: (response)=>{
        this.count= response.count;
        this.totalCount = response.totalCount;
      },
      error:(error) => {
        console.log(error);
      }
    })
  }
  
  
}
