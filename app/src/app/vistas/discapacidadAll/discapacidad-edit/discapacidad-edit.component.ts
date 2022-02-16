import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterEvent } from "@angular/router"
import axios from 'axios';

@Component({
  selector: 'app-discapacidad-edit',
  templateUrl: './discapacidad-edit.component.html',
  styleUrls: ['./discapacidad-edit.component.css']
})
export class DiscapacidadEditComponent implements OnInit {
  numero: any;
  constructor(private _activeRouter: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: any) => {
      this.numero = params.numero;
      console.log(this.numero);
  })
  }
}
