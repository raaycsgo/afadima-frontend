import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../../../loginServices/login.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  apiUrl:string  = 'http://35.180.22.126:8000/api/';
  imagenesUrl:string  = 'http://35.180.22.126:8000/';
  servicios:Array<any> = [];
  public user:any;

  constructor(public loginService: LoginService) { }

  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();

    this.getAllServicios()
  }

  getAllServicios(){
    axios.get(this.apiUrl + 'servicios').then((response) =>{
      this.servicios = response.data;
      console.log(this.servicios);
    })
  }

}
