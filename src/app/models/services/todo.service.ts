import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../todos';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Category } from '../categories';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TodoService  {
  todos: Todo[] = [];
  baseApiUrl: string = environment.baseApiUrl;
  private todosSubject = new BehaviorSubject<Todo[]>([]);  
  todos$ = this.todosSubject.asObservable(); 

  private countRefreshSubject = new BehaviorSubject<Boolean>(false);
  countRefresh$ = this.countRefreshSubject.asObservable();

  taskStatus = ['All','Todo', 'Pending', 'Ongoing', 'Completed'];

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseApiUrl + '/api/TodoList').pipe(
      tap(todos => this.todosSubject.next(todos)));
  }

  addTodo(todo:Todo): Observable<Todo>{
    //const headers = new HttpHeaders({ 'Content-Type': 'application/json' })     todo, {headers};
    return this.http.post<Todo>(this.baseApiUrl + '/api/TodoList', todo, ).pipe(
      tap(newTodo => {
        const updatedTodos = [...this.todosSubject.value, newTodo];
        this.todosSubject.next(updatedTodos);
      })
    );
   }

  updateTodo(id: number, updateEmployeeRequest: Todo): Observable<Todo>{
    return this.http.put<Todo>(this.baseApiUrl + '/api/TodoList/' + id, updateEmployeeRequest);
  }

  deleteTodo(id: number): Observable<Todo>{
    return this.http.delete<Todo>(this.baseApiUrl + '/api/TodoList/'+ id);
  }

  getCount(): Observable<{count: {[key:string]:number}, totalCount:number}>{
    return this.getTodos().pipe(
      map((todos) => {
         const count = todos.reduce((acc, todo) => {
           acc[todo.taskStatus] = (acc[todo.taskStatus] || 0) + 1;
           return acc;
         }, {} as { [key: string]: number });
 
        const totalCount = todos.length;
        return { count, totalCount };
      })
    )
  }

  getTodoCount(status:string): Observable<number>{
    return this.http.get<{count:number}>(`${this.baseApiUrl}/api/TodoListCount/${status}`).pipe(map(response => response.count))
  }
  
  triggerCountRefresh(){
    this.countRefreshSubject.next(true);
  }
  
}
