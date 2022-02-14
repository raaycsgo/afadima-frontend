import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public archivos : any = [];
    email : string;
    password : string;
    image : string;
  constructor() {
    this.image = "";
    this.email  = "";
    this.password = "";
  }
  
   getUser() {
  
    axios.post('http://35.180.22.126:8000/api/login', {
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
  capturarFile(event: any){
    const archivoCapturado = event.target.files[0];
    this.archivos.push(archivoCapturado);
    //console.log(event.target.files);

  }
}
