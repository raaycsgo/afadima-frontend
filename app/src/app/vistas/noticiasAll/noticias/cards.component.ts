import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../../../loginServices/login.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  apiUrl:string  = 'http://35.180.22.126:8000/api/';
  imagenesUrl:string  = 'http://35.180.22.126:8000/';
  noticias:Array<any> = [];
  public user:any;

  constructor(public loginService: LoginService) { }

  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();

    this.getAllNoticias()
  }

  getAllNoticias(){
    axios.get(this.apiUrl + 'noticias').then((response) =>{
      console.log(response.data);
      this.noticias = response.data;
    })
  }

}
