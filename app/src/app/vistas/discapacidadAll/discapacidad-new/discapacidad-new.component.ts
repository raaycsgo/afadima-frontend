import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../loginServices/login.service';
import axios from 'axios';

@Component({
  selector: 'app-discapacidad-new',
  templateUrl: './discapacidad-new.component.html',
  styleUrls: ['./discapacidad-new.component.css']
})
export class DiscapacidadNewComponent implements OnInit {
  name : string ="";
  apiURL : string = " http://35.180.22.126:8000/api/";
  user:any;
  
  constructor(private router:Router, public loginService: LoginService) { }

  async ngOnInit() {

    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserSocio();

  }

  postDiscapacidad(){
    axios.post(this.apiURL + "tipoDiscapacidad/new", {
      name : this.name,
  
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
