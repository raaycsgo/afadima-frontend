import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterEvent } from "@angular/router"
import axios from 'axios';

@Component({
  selector: 'app-numerario-edit',
  templateUrl: './numerario-edit.component.html',
  styleUrls: ['./numerario-edit.component.css']
})
export class NumerarioEditComponent implements OnInit {
  numero: any;
  tiposdiscapacidad: any = [];
  dni: string = "";
  fecha_nac = "";
  socio = "";
  discapacidad : any = [];
  datos: any = {};
  textolleno: number = 0;
  codeError: number = 0;
  errorMessage: string = 'Faltan campos';
  name: string = '';
  surnames: string = '';
  apiURL: string = " http://35.180.22.126:8000/api/"
  constructor(private _activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: any) => {
      this.numero = params.numero;
      console.log(this.numero);
    })
    this.getAllNumerario();
    this.getAllDiscapacidad();


  }
  getAllNumerario() {
    axios.get(this.apiURL + 'numerarios/' + this.numero).then((response) => {
      this.datos = response.data;
      console.log(this.datos);
    })
  }

  editar() {
  
    axios.put(this.apiURL + "numerario/" + this.numero + "/edit", {
     

    })
      .then((response) => {
        console.log(response);
        this.router.navigate(['admin/numerario']);

      })
      .catch((error) => {
        console.log(error)
      });
  }
  getAllDiscapacidad() {
    axios.get(this.apiURL + 'tipoDiscapacidad').then((response) => {
      this.tiposdiscapacidad = response.data;
      
      console.log(this.datos);
    })
  }

}