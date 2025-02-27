import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../todos';
import { of } from 'rxjs';
import { Category } from '../categories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService  {
  todos: Todo[];
  /* baseApiUrl: string */
  constructor(private http: HttpClient) {
    this.todos = [
          {
            id: '1',
            task: 'study',
            category: Category.Todo,
            date: new Date(),
            isEditing: false,
          },
          {
            id: '1',
            task: 'study',
            category: Category.Todo,
            date: new Date(),
            isEditing: false,
          },
          {
            id: '2',
            task: 'learn',
            category: Category.Completed,
            date: new Date(),
            isEditing: false,
          },
          {
            id: '3',
            task: 'learn',
            category: Category.Ongoing,
            date: new Date(),
            isEditing: false,
          },
          {
            id: '3',
            task: 'learn',
            category: Category.Ongoing,
            date: new Date(),
            isEditing: false,
          },
          {
            id: '3',
            task: 'learn',
            category: Category.Pending,
            date: new Date(),
            isEditing: false,
          },
          
          
        ]
   }
  
  getTodos(){
    return of(this.todos);
  }

  getAllTodos(){
    //this.http.get()
  }
  
  totalCount: number = 0;
  categoryCounts: {[key:string]: number}={}
  
  getCountCategories(){
    this.categoryCounts = this.todos.reduce((acc, todo) => {
      acc[todo.category] = (acc[todo.category] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
    this.totalCount = this.todos.length;
    return of ({categoryCounts: this.categoryCounts, totalCount:this.totalCount})
  }
  
  
}
