import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Todo } from 'src/app/models/todos';
import { Category } from 'src/app/models/categories';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/models/services/todo.service';
import { of } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  todos: Todo[] = [ ];  
  taskStatus: string[] = ['Todo','Pending','Ongoing','Completed',];

  faTrash = faTrash;
  faPenToSquare = faPenToSquare;



  constructor(private todoService:TodoService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.todoService.todos$.subscribe(
      (todos)=>{
        this.todos = [...todos];
      }),
      this.todoService.getTodos().subscribe();
    }

    updateTodo(todo:Todo){
      this.todoService.updateTodo(todo.id, todo).subscribe({
        next: (response) =>{
          console.log('edit' , response);
          this.fetchUpdatedTodos();
        }
      })
    }
    
    fetchUpdatedTodos() {
      this.todoService.getTodos().subscribe({
        next: (todos) => {
          this.todos = todos; // Update the UI with the latest tasks
          console.log('🔄 Task list refreshed', todos);
        },
        error: (error) => {
          console.error('❌ Failed to fetch updated tasks:', error);
        }
      });
    }

    deleteTodo(id:number){
      this.todoService.deleteTodo(id).subscribe({
        next:() =>{
          console.log(`task with ${id} deleted`)
          this.todos = this.todos.filter(todo => todo.id !==id);
        },
        error: (error)=>{
          console.error('error', error)
        }
      })
    }
}
