import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../loginServices/login.service';

@Component({
  selector: 'app-producto-cards',
  templateUrl: './producto-cards.component.html',
  styleUrls: ['./producto-cards.component.css']
})
export class ProductoCardsComponent implements OnInit {

  user:any;

  constructor(public loginService: LoginService) { }
  
  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserSocio();
  }

}
