import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../../../loginServices/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-numerario-new-admin',
  templateUrl: './numerario-new-admin.component.html',
  styleUrls: ['./numerario-new-admin.component.css']
})
export class NumerarioNewAdminComponent implements OnInit {

  datos : any=[];
  socio : string = '';
  textolleno : number = 0;
  codeError : number = 0;
  errorMessage: string = 'Faltan campos';
  fecha_nac : string = '';
  name : string = '';
  surnames : string  = '';
  nombre_entero : string = '';
  dni : string = '';
  discapacidad : string = "";
  apiURL : string = " http://35.180.22.126:8000/api/"
  user:any;

  constructor(private router:Router, public loginService: LoginService) { }

  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserSocio();

    this.getAllDiscapacidad();
  }

  postNumerario() {
    this.nombre_entero = this.name + " " + this.surnames; 
    axios.post(this.apiURL + "numerarios/"+this.socio+"/new", {
      name: this.nombre_entero,
      dni: this.dni,
      birthDate: this.fecha_nac,
      typeDisc: this.discapacidad
    
        
    })
    .then((response) => {
      console.log(response);
      this.router.navigate(['admin/numerario']);
        
    })
    .catch((error) => {
        this.codeError = error.response.data.code;
    });
  }

  verificarCampos(){
    if( this.fecha_nac == ''||  this.name == '' || this.surnames == '' || this.dni == '' || this.socio == ''){
      this.textolleno = 1;
      }
  }

  getAllDiscapacidad() {
    axios.get(this.apiURL + 'tipoDiscapacidad').then((response) => {
      this.datos = response.data;
      
      console.log(this.datos);
    })
  }

}