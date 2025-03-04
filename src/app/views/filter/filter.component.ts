import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/models/services/todo.service';
import { Todo } from 'src/app/models/todos';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  selectedFilter: string = "All";
  selectedCategory: string = "Todo";
  categories: string[] = ['Todo','Pending','Ongoing','Completed',];
  uniqueCategories: string[] = [];
  totalCount: number = 0;
  
  todos: Todo[] = []; 
  
  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    
}

filterBy(nameInput: HTMLInputElement) {
  if (nameInput.value) {
    this.todos = this.todos.filter(todos => todos.taskStatus)
  }
}
}
