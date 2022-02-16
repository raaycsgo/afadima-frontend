import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-socios-nuevo',
  templateUrl: './socios-nuevo.component.html',
  styleUrls: ['./socios-nuevo.component.css']
})
export class SociosNuevoComponent implements OnInit {
  datos : any=[];
  textolleno : number = 0;
  codeError : number = 0;
  errorMessage: string = 'Faltan campos';
  email : string = '';
  phone : string = '';
  address : string = '';
  name : string = '';
  surnames : string  = '';
  password : string = '';



  constructor() { }

   postSocio() {
     if(this.email == null || this.phone == null|| this.address == null || this.name == null || this.surnames == null || this.password == null){
      this.textolleno = 1;
     }
  
    axios.post('http://35.180.22.126:8000/api/socios/new', {
        email: this.email,
        password : this.password,
        rol :["ROL_USER"],
        name : this.name,
        surnames : this.surnames,
        address : this.address,
        phone : this.phone,
        numerarioId : null
        
    })
    .then((response) => {
      console.log(response)
        
    })
    .catch((error) => {
        this.codeError = error.response.data.code;
        this.errorMessage = error.response.data.message;
    });
  }
  ngOnInit(): void {
  }

}
