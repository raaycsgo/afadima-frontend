import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {Router} from '@angular/router';

@Component({
  selector: 'app-numerario-new',
  templateUrl: './numerario-new.component.html',
  styleUrls: ['./numerario-new.component.css']
})
export class NumerarioNewComponent implements OnInit {

  constructor(private router:Router) { }
  datos : any=[];
  socio : string = '';
  textolleno : number = 0;
  codeError : number = 0;
  errorMessage: string = 'Faltan campos';
  fecha_nac : string = '';
  address : string = '';
  name : string = '';
  surnames : string  = '';
  dni : string = '';
  discapacidad : string = '';
  apiURL : string = " http://35.180.22.126:8000/api/"

  postNumerario() {
   console.log(this.discapacidad);
   axios.post(this.apiURL + "numerarios/new", {
    
       
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
   if( this.fecha_nac == ''|| this.address == '' || this.name == '' || this.surnames == '' || this.dni == ''){
     this.textolleno = 1;
    }
 }
 getAllDiscapacidad() {
  axios.get(this.apiURL + 'tipoDiscapacidad').then((response) => {
    this.datos = response.data;
    
    console.log(this.datos);
  })
}
 ngOnInit(): void {
   this.getAllDiscapacidad();
 }

}
