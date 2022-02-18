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
  user:any;
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

  async setSocio() {
    await this.getIdSocio()
 
    axios.get(this.apiURL + 'socios/' + this.socioId, {})
    .then((response) =>{
      this.user = response.data;
      this.controlRolUser()
    })
  }

  controlRolUserAdmin() {
    console.log(this.user.rol);
    
    if (this.user.rol[0] != 'ROLE_ADMIN') {
      console.log('no admin');
      this.router.navigate(['login']);
    }
  }

  controlRolUserSocio() {
    if (this.user.rol[0] != 'ROLE_SOCIO') {
      this.router.navigate(['login']);
    }
  }

  controlRolUser() {
    if (this.user.rol[0] != 'ROLE_ADMIN' && this.user.rol[0] != 'ROLE_SOCIO') {
      this.router.navigate(['descarga-usuario']);
    }
  }

  getUser() {
    return this.user
  }

  getRolUser() {
    return this.userRol
  }

}
