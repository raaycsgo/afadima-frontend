import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterEvent } from "@angular/router"
import { LoginService } from '../../../loginServices/login.service';
import axios from 'axios';

@Component({
  selector: 'app-discapacidad-edit',
  templateUrl: './discapacidad-edit.component.html',
  styleUrls: ['./discapacidad-edit.component.css']
})
export class DiscapacidadEditComponent implements OnInit {
  numero: any;
  datos : any = "";
  name : string = "";
  apiURL: string = " http://35.180.22.126:8000/api/"
  user:any;
  constructor(private _activeRouter: ActivatedRoute, private router: Router, public loginService: LoginService) { }
  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserSocio();

    this._activeRouter.params.subscribe((params: any) => {
      this.numero = params.numero;
      console.log(this.numero);
    })

    this.getDiscapacidad();
  }
  getDiscapacidad() {
    axios.get(this.apiURL + 'tipoDiscapacidad/' + this.numero).then((response) => {
      this.datos = response.data;
      console.log(this.datos);
    })
  }
  editar(){
    axios.put(this.apiURL + "tipoDiscapacidad/" + this.numero + "/edit", {
      name: this.name,
    })
      .then((response) => {
        console.log(response);
        this.router.navigate(['admin/discapacidad']);

      })
      .catch((error) => {
        console.log(error)
      });
  }
  
}
