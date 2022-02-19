import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../loginServices/login.service';

@Component({
  selector: 'app-noticias-show',
  templateUrl: './noticias-show.component.html',
  styleUrls: ['./noticias-show.component.css']
})
export class NoticiasShowComponent implements OnInit {

  user:any;

  constructor(public loginService: LoginService) { }
  
  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserSocio();
  }

}
