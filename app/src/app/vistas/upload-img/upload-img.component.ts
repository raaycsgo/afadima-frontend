import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {

  apiUrl:string  = 'http://35.180.22.126:8000/api/';
  formData:any;

  constructor() { }

  ngOnInit(): void {
  }

  fileEvent(fileInput: any){
    let file = (<HTMLInputElement>fileInput.target).files
    if (file == null) {
      return;
    }

    this.formData = new FormData();
    this.formData.append("image", file[0]);
  }

  uploadFile(){
    axios.post(this.apiUrl + 'noticias/new', this.formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) =>{
      console.log(response.data);
    })
  }

}
