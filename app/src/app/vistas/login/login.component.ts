import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { LoginService } from './../../loginServices/login.service';

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
  user:any
  
  constructor(private router:Router,public loginService: LoginService) {}
  
  getUser() {
  
    axios.post('http://35.180.22.126:8000/api/login', {
        email: this.email,
        password: this.password 
    })
    .then((response) => {
        localStorage.setItem('token', response.data.token);
        this.codeError = 0;
        
        this.router.navigate(['noticias']);
        setTimeout(() => {
          location.reload()
        }, 100);
        
    })
    .catch((error) => {
        this.codeError = error.response.data.code;
        this.errorMessage = error.response.data.message;
    });
  }

  ngOnInit(): void {
  }

}
