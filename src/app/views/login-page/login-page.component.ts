import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
   
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
  }
}
