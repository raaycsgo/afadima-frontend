import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../loginServices/login.service';

@Component({
  selector: 'app-producto-tabla',
  templateUrl: './producto-tabla.component.html',
  styleUrls: ['./producto-tabla.component.css']
})
export class ProductoTablaComponent implements OnInit {

  user:any;

  constructor(public loginService: LoginService) { }
  
  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserAdmin();
  }

}
