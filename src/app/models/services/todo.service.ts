import { Injectable } from '@angular/core';
import { Todo } from '../todos';
import { of } from 'rxjs';
import { Category } from '../categories';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  
  constructor() {
    this.todos = [
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
            category: Category.Pending,
            date: new Date(),
            isEditing: false,
          },
          
        ]
   }

  getTodos(){
    return of(this.todos);
  }

  
}
