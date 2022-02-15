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
  
    axios.post('http://35.180.22.126:8000/api/login', {
      email: this.email,
      password: this.password 
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

}
