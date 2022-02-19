import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {Router} from '@angular/router';
import { LoginService } from '../../../loginServices/login.service';


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
  apiURL : string = " http://35.180.22.126:8000/api/"
  user:any;

  constructor(private router:Router, public loginService: LoginService) { }

  async ngOnInit() {
    // await this.loginService.getUser().then(response => this.user = response);
  }

  postSocio() {
  
    axios.post(this.apiURL + "socios/new", {
      email: this.email,
      password : this.password,
      rol :["ROLE_USER"],
      name : this.name,
      surnames : this.surnames,
      address : this.address,
      phone : this.phone,
      numerarioId : null
    })
    .then((response) => {
      this.loginService.getUser().then((response) => {
        this.user = response
        console.log(localStorage.getItem('token'));
        
        if (localStorage.getItem('token') != null) {
          this.router.navigate(['admin/socios']);
        }else {
          this.router.navigate(['login']);
        }
      });
      
      
    })
    .catch((error) => {
      this.errorMessage = error.response;
      this.textolleno = 1;
    });

  }

  verificarCampos(){
    if(this.email == '' || this.phone == ''|| this.address == '' || this.name == '' || this.surnames == '' || this.password == ''){
      this.textolleno = 1;
    }
  }


}
