import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterEvent } from "@angular/router";
import jwt_decode from 'jwt-decode';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private _activeRouter: ActivatedRoute, private router: Router){}
  title = 'afadima';
  apiURL: string = "http://35.180.22.126:8000/api/"
  public user:any;
  socioId:number = 0;
  userRol:string = ''

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  tokenDecode() {
    if (localStorage.getItem('token') != null) {
      let token = localStorage.getItem('token');
      return this.getDecodedAccessToken((token == null) ? '' : token);
    }else {
      this.router.navigate(['login']);
    }
  }

  async getIdSocio() {
    return await axios.get(this.apiURL + 'socios/email/' + this.tokenDecode().email, {})
    .then((response) =>{
      return this.socioId = response.data.id;
    })
  }

  async getSocio() {
    await this.getIdSocio()
  
    return await axios.get(this.apiURL + 'socios/' + this.socioId, {})
    .then((response) => {
      return response.data;
    }).then((data) => {
      return this.user = data
    })
  }

  controlRolUserAdmin() {
    if (this.user.rol[0] != 'ROLE_ADMIN') {
      this.router.navigate(['login']);
      setTimeout(() => {
        alert('No tienes permisos')
      }, 1000);
      
    }
  }

  controlRolUserSocio() {
    if (this.user.rol[0] != 'ROLE_SOCIO' && this.user.rol[0] != 'ROLE_ADMIN') {
      this.router.navigate(['login']);
    }
  }

  controlRolUser() {  
    if (this.user.rol[0] == 'ROLE_USER') {
      this.router.navigate(['descarga-usuario']);
    }
  }

  async getUser() {
    await this.getSocio()
    return this.user
  }

}
