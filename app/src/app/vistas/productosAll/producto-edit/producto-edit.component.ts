import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../loginServices/login.service';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  user:any;

  constructor(public loginService: LoginService) { }
  
  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserAdmin();
  }

}
