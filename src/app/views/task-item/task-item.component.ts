import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Todo } from 'src/app/models/todos';

import { MatSnackBar } from '@angular/material/snack-bar';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/models/services/todo.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  todos: Todo[] = [ ];  
  taskStatus: string[] = ['Todo','Pending','Ongoing','Completed',];
  
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  
  constructor(private todoService:TodoService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.todoService.todos$.subscribe(
      (todos)=>{
        this.todos = [...todos];
      }),
      this.todoService.getTodos().subscribe();
    }

  updateTodo(todo:any){
    this.todoService.updateTodo(todo.id, todo).subscribe({
      next: (response) =>{
        console.log('edit' , response);
        this.fetchUpdatedTodos();
        this.todoService.triggerCountRefresh();
        this.snackBar.open('Task Successfully Updated!', 'Close', {
          duration: 3000,
        })
      }
    })
  }
  
  fetchUpdatedTodos() {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos; 
      }
    });
  }

  editTask(inputRef: HTMLInputElement){
    setTimeout(() => {
      inputRef.focus();
    }, 0);
  }

  deleteTodo(id:number){
    if(confirm('Are you sure you want to delete this task?')){
      this.todoService.deleteTodo(id).subscribe({
        next:() =>{
          console.log(`task with ${id} deleted`)
          this.todos = this.todos.filter(todo => todo.id !==id);
          this.todoService.triggerCountRefresh();
          this.snackBar.open('Task Successfully Deleted!', 'Close', {
            duration: 3000,
          })
        },
        error: (error)=>{
          console.error('error', error)
        }
      })
    }
  }
  

}
