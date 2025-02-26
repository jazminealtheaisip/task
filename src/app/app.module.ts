import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './views/task/task.component';
import { HeaderComponent } from './views/header/header.component';
import { TaskItemComponent } from './views/task-item/task-item.component';
import { FilterComponent } from './views/filter/filter.component';
import { CountComponent } from './views/count/count.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { TodoListPageComponent } from './views/todo-list-page/todo-list-page.component';

/* import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; */
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    HeaderComponent,
    TaskItemComponent,
    FilterComponent,
    CountComponent,
    LoginPageComponent,
    TodoListPageComponent,
 
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
   /*  NgbModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
