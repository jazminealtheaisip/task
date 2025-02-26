import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { AppComponent } from './app.component';
import { TodoListPageComponent } from './views/todo-list-page/todo-list-page.component';

const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent, 
  },
  
  {
    path: 'todo-list', component: TodoListPageComponent, 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
