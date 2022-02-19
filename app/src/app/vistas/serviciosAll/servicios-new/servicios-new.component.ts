import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../loginServices/login.service';

@Component({
  selector: 'app-servicios-new',
  templateUrl: './servicios-new.component.html',
  styleUrls: ['./servicios-new.component.css']
})
export class ServiciosNewComponent implements OnInit {

  user:any;

  constructor(public loginService: LoginService) { }
  
  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserAdmin();
  }

}
