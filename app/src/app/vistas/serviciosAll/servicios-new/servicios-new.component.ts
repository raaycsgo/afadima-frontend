import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { LoginService } from '../../../loginServices/login.service';



@Component({
  selector: 'app-servicios-new',
  templateUrl: './servicios-new.component.html',
  styleUrls: ['./servicios-new.component.css']
})
export class ServiciosNewComponent implements OnInit {
  apiUrl:string  = 'http://35.180.22.126:8000/api/';
  formData:FormData = new FormData();
  title:string = '';
  description:string = '';
  user:any;
  socioId:number = 0;

  constructor(public loginService: LoginService, private router:Router) { }

  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserAdmin();
  }

  fileEvent(fileInput: any){
    let file = (<HTMLInputElement>fileInput.target).files
    if (file == null) {
      return;
    }

    this.formData.append("image", file[0]);
  }

  uploadForm(){

    this.formData.append("name", this.title);
    this.formData.append("description", this.description);
    this.formData.append("socioId", this.user.socioId);

    axios.post(this.apiUrl + 'servicios/new', this.formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) =>{
      console.log(response.data);
      this.router.navigate(['servicios']);
    }).catch((error) => {
      console.log(error.response);
    });
    
  }

}
