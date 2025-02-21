import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todos';
import { Category } from 'src/app/models/categories';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from 'src/app/models/services/todo.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  todos: Todo[] = []
  selectedCategory: string = "Todo";
  categories: string[] = ['Todo','Pending','Ongoing','Completed',];

  faTrash = faTrash;
  faPenToSquare = faPenToSquare;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  toggleEdit(index: number) {
    this.todos[index].isEditing = !this.todos[index].isEditing;
  }
  
  getCategoryColor(category: string): string {
    switch (category) {
      case 'Todo':
        return '#dcceb3';
      case 'Pending':
        return '#e5e78d';
      case 'Ongoing':
        return '#a3bdff';
      case 'Completed':
        return '#8de79e';
      default:
        return 'white';
    }
  }

}
