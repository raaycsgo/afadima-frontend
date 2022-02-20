import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../../../loginServices/login.service';
@Component({
  selector: 'app-producto-cards',
  templateUrl: './producto-cards.component.html',
  styleUrls: ['./producto-cards.component.css']
})
export class ProductoCardsComponent implements OnInit {

  apiUrl:string  = 'http://35.180.22.126:8000/api/';
  imagenesUrl:string  = 'http://35.180.22.126:8000/';
  productos:Array<any> = [];
  public user:any;

  constructor(public loginService: LoginService) { }

  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();

    this.getAllServicios()
  }

  getAllServicios(){
    axios.get(this.apiUrl + 'productos').then((response) =>{
      this.productos = response.data;
      console.log(this.productos);
    })
  }

}
