import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../loginServices/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-noticias-show',
  templateUrl: './noticias-show.component.html',
  styleUrls: ['./noticias-show.component.css']
})
export class NoticiasShowComponent implements OnInit {

  user:any;
  apiURL:string  = 'http://35.180.22.126:8000/api/';
  imagenesUrl:string  = 'http://35.180.22.126:8000/';
  numero:number = 0;
  noticia:any;

  constructor(private _activeRouter: ActivatedRoute, private router: Router,public loginService: LoginService) { }
  
  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserSocio();

    this._activeRouter.params.subscribe((params: any) => {
      this.numero = params.numero;
    })

    this.getIdNoticiaShow()

  }

  getIdNoticiaShow() {
    axios.get(this.apiURL + 'noticias/' + this.numero).then((response) => {
      this.noticia = response.data;
    })
  }


}
