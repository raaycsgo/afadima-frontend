import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { LoginService } from '../../../loginServices/login.service';

@Component({
  selector: 'app-noticias-new',
  templateUrl: './noticias-new.component.html',
  styleUrls: ['./noticias-new.component.css']
})
export class NoticiasNewComponent implements OnInit {

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

    this.formData.append("title", this.title);
    this.formData.append("description", this.description);
    this.formData.append("socioId", this.user.socioId);

    axios.post(this.apiUrl + 'noticias/new', this.formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) =>{
      console.log(response.data);
      this.router.navigate(['noticias']);
    }).catch((error) => {
      console.log(error.response);
    });
    
  }

}
