import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterEvent } from "@angular/router";
import axios from 'axios';
import { LoginService } from '../../../loginServices/login.service';

@Component({
  selector: 'app-noticias-edit',
  templateUrl: './noticias-edit.component.html',
  styleUrls: ['./noticias-edit.component.css']
})
export class NoticiasEditComponent implements OnInit {
  numero: number = 0;
  apiURL: string = "http://35.180.22.126:8000/api/"
  noticia:any;
  formData:any;
  title:string = '';
  description:string = '';
  socioId:number = 0;
  public user:any;

  constructor(private _activeRouter: ActivatedRoute, private router: Router, public loginService: LoginService) { }

  async ngOnInit() {

    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserAdmin();
    
    this._activeRouter.params.subscribe((params: any) => {
      this.numero = params.numero;
    })

  }

  getIdNoticia() {
    axios.get(this.apiURL + 'noticias/' + this.numero).then((response) => {
      this.noticia = response.data;
    })
  }

  fileEvent(fileInput: any){
    let file = (<HTMLInputElement>fileInput.target).files
    if (file == null) {
      return;
    }

    this.formData = new FormData();
    this.formData.append("image", file[0]);
  }

  uploadForm(){

    this.formData.append("title", this.title);
    this.formData.append("description", this.description);
    this.formData.append("socioId", this.socioId);
    
    axios.post(this.apiURL + 'noticias/' + this.numero + '/edit', this.formData, {
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
