import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias-new',
  templateUrl: './noticias-new.component.html',
  styleUrls: ['./noticias-new.component.css']
})
export class NoticiasNewComponent implements OnInit {

  apiUrl:string  = 'http://35.180.22.126:8000/api/';
  formData:any;
  title:string = '';
  description:string = '';
  user:any;
  socioId:number = 0;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getIdSocio()
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  tokenDecode() {
    if (localStorage.getItem('token') != null) {
      let token = localStorage.getItem('token');
      return this.getDecodedAccessToken((token == null) ? '' : token);
    }else {
      this.router.navigate(['login']);
    }
  }

  getIdSocio(){
    axios.get(this.apiUrl + 'socios/email/' + this.tokenDecode().email, {})
    .then((response) =>{
      this.socioId = response.data.id;
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

    if (localStorage.getItem('token') != null) {
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
    }else {
      alert('No has iniciado sesion');
      setTimeout(() => { 
        this.router.navigate(['login']);
      },1500)
    }
  }

}
