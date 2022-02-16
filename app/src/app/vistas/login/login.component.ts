import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';
  codeError: number = 0;
  errorMessage: string = '';
  
  constructor() {}
  
  getUser() {
  
    axios.post('http://35.180.22.126:8000/api/login', {
        email: this.email,
        password: this.password 
    })
    .then((response) => {
        sessionStorage.setItem('token', response.data.token)
        this.codeError = 0;
    })
    .catch((error) => {
        this.codeError = error.response.data.code;
        this.errorMessage = error.response.data.message;
    });
  }

  ngOnInit(): void {
  }

}
