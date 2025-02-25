import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'login-page', component:LoginPageComponent
  },
  {
    path: 'root', component: AppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
