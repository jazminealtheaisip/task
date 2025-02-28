import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Todo } from 'src/app/models/todos';
import { Category } from 'src/app/models/categories';
import { TodoService } from 'src/app/models/services/todo.service';
import{v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  
  
  taskStatus = Object.values(Category);

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  
  
}
