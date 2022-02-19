import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Router} from '@angular/router';
import axios from 'axios';
import { LoginService } from '../../../loginServices/login.service';
import { windowCount } from 'rxjs';

@Component({
  selector: 'app-discapacidad-tabla',
  templateUrl: './discapacidad-tabla.component.html',
  styleUrls: ['./discapacidad-tabla.component.css']
})
export class DiscapacidadTablaComponent implements AfterViewInit {

  socio : string = "";
  mensaje : string = "";
  respuesta : number = 3;
  displayedColumns: string[] = ['id','name','actions'];
  dataSource : any;
  apiUrl:string  = 'http://35.180.22.126:8000/api/';
  socios:any = [];
  codeError : string = "";
  user:any;

  constructor(private router:Router, public loginService: LoginService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public doFilter = (value: any) => {
    this.dataSource.filter = value.target.value.trim().toLocaleLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserSocio();

    this.getAllSocios()
  }
  getAllSocios(){
    axios.get(this.apiUrl + 'tipoDiscapacidad').then((response) =>{
      this.dataSource =new MatTableDataSource<any>(response.data)
      this.dataSource.paginator = this.paginator;
    })
  }
  deleteDiscapacidad(idTipo: number){
    axios.delete(this.apiUrl + 'tipoDiscapacidad/' + idTipo)
    .then((response) => {
      console.log(response);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
