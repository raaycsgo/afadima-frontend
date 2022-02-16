import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterEvent } from "@angular/router"
import axios from 'axios';
@Component({
  selector: 'app-socios-edit',
  templateUrl: './socios-edit.component.html',
  styleUrls: ['./socios-edit.component.css']
})
export class SociosEditComponent implements OnInit {
  numero: any;
  roles: any =""
  rol: any = "";
  datos: any = {};
  textolleno: number = 0;
  codeError: number = 0;
  errorMessage: string = 'Faltan campos';
  email: string = '';
  phone: string = '';
  address: string = '';
  name: string = '';
  surnames: string = '';
  password: string = '';
  apiURL: string = " http://35.180.22.126:8000/api/"
  constructor(private _activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: any) => {
      this.numero = params.numero;
      console.log(this.numero);
    })
    this.getAllSocios();

  }
  getAllSocios() {
    axios.get(this.apiURL + 'socios/' + this.numero).then((response) => {
      this.datos = response.data;
      this.roles = response.data.rol[0];
      this.changeTextRol();
      console.log(this.datos);
    })
  }
  changeTextRol(){
    if (this.roles == "ROLE_ADMIN") {
      this.roles = "EMPLEADO";
    } else if (this.roles == "ROLE_SOCIO") {
      this.roles = "SOCIO";
    } else if (this.roles == "ROLE_USER") {
      this.roles = "USUARIO";
    }
  }
  editar() {
    if (this.rol == "EMPLEADO") {
      this.rol = "ROLE_ADMIN";
    } else if (this.rol == "SOCIO") {
      this.rol = "ROLE_SOCIO";
    } else if (this.rol == "USUARIO") {
      this.rol = "ROLE_USER";
    }
    axios.put(this.apiURL + "socios/" + this.numero + "/edit", {
      email: this.email,
      password: this.password,
      rol: [this.rol],
      name: this.name,
      surnames: this.surnames,
      address: this.address,
      phone: this.phone,
      numerarioId: null

    })
      .then((response) => {
        console.log(response);
        this.router.navigate(['admin/socios']);

      })
      .catch((error) => {
        console.log(error)
      });
  }
}