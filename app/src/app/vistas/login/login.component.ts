import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email : string;
    password : string;
  constructor() {
    this.email  = "";
    this.password = "";
  }

   getUser() {
     console.log(this.email);
     console.log(this.password)
    axios.post('https://reqres.in/api/login', {
      email: this.email,
      password: this.password
      
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      
      console.log(error);
    });
  }
  ngOnInit(): void {
  }

}
