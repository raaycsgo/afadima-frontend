import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router"

@Component({
  selector: 'app-socios-edit',
  templateUrl: './socios-edit.component.html',
  styleUrls: ['./socios-edit.component.css']
})
export class SociosEditComponent implements OnInit {
  numero : any ;
  constructor(private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: any) => {      
      this.numero = params.numero;
      console.log(this.numero);
  })
  
}
}