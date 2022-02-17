import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-discapacidad-new',
  templateUrl: './discapacidad-new.component.html',
  styleUrls: ['./discapacidad-new.component.css']
})
export class DiscapacidadNewComponent implements OnInit {
  name : string ="";
  apiURL : string = " http://35.180.22.126:8000/api/";
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  postDiscapacidad(){
    axios.post(this.apiURL + "tipoDiscapacidad/new", {
      name : this.name,
  
  })
  .then((response) => {
    console.log(response);
    this.router.navigate(['admin/discapacidad']);
      
  })
  .catch((error) => {
      console.log(error)
  });
  }
}
