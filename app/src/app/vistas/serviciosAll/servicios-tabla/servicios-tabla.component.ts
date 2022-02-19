import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../loginServices/login.service';

@Component({
  selector: 'app-servicios-tabla',
  templateUrl: './servicios-tabla.component.html',
  styleUrls: ['./servicios-tabla.component.css']
})
export class ServiciosTablaComponent implements OnInit {

  user:any;

  constructor(public loginService: LoginService) { }
  
  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserAdmin();
  }
}
