import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from '../../models/todos';
import { Category } from '../../models/categories';
import {TodoService } from '../../models/services/todo.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  @Output() filterSelected = new EventEmitter<string>();
  todos: Todo[] = []
  
  totalCount: number = 0;
  count: {[key:string]: number}={}
  todoCount: {[key:string]: number}={
    all: 0,
    todo: 0,
    pending: 0,
    ongoing: 0,
    completed: 0,
  }
  statusList = ['All','Todo', 'Pending', 'Ongoing', 'Completed'];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.refreshCounts();
    this.todoService.countRefresh$.subscribe(()=>{
      this.refreshCounts()
    })
  }

  refreshCounts() {
    this.statusList.forEach(status => this.getCounts(status)); 
  }

  getCounts(status: string){
    const statuses = ['All', 'Todo', 'Pending', 'Ongoing', 'Completed'];
    
    statuses.forEach(status => {
      this.todoService.getTodoCount(status).subscribe({
        next: (count) => {
          console.log(`count for ${status}:`, count);
          this.todoCount[status.toLowerCase()] = count; 
          
        },
        error: (err) => {
          console.error(`Error fetching count for ${status}:`, err);
        }
      });
    });
  }

  filterTasks(statusList: string){
    this.filterSelected.emit(statusList);
  }

  
}
