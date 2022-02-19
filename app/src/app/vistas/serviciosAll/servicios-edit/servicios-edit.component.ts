import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../loginServices/login.service';

@Component({
  selector: 'app-servicios-edit',
  templateUrl: './servicios-edit.component.html',
  styleUrls: ['./servicios-edit.component.css']
})
export class ServiciosEditComponent implements OnInit {

  user:any;

  constructor(public loginService: LoginService) { }
  
  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserAdmin();
  }

}
