import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-socios-tabla',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {
  
  constructor() {}
   apiUrl:string  = 'http://35.180.22.126:8000/api/';
   socios:any = [];

  ngOnInit(): void {
    this.getAllSocios()
  }

  getAllSocios(){
    axios.get(this.apiUrl + 'socios').then((response) =>{
      console.log(response.data);
      this.socios = response.data;
    })
  }
}
