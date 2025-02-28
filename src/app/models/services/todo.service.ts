import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../todos';
import { Observable, of } from 'rxjs';
import { Category } from '../categories';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService  {
  todos: Todo[] = [];
  
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseApiUrl + '/api/TodoList');
  }
  
  /* getCountCategories(){
    this.count = this.todos.reduce((acc, todo) => {
      acc[todo.taskStatus] = (acc[todo.taskStatus] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number });
    this.totalCount = this.todos.length;
    return of ({categoryCounts: this.count, totalCount:this.totalCount})
  } */

  getCount(): Observable<{count: {[key:string]:number}, totalCount:number}>{
    return this.getTodos().pipe(
      map((todos) => {
        const count = todos.reduce((acc, todo) => {
          acc[todo.taskStatus] = (acc[todo.taskStatus] || 0) + 1;
          return acc;
        }, {} as { [key: string]: number });
  
        const totalCount = todos.length;
        return { count, totalCount };
      }))
  }
  
}
