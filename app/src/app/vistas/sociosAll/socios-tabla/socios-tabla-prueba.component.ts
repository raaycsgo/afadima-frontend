import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Router} from '@angular/router';
import axios from 'axios';
import { windowCount } from 'rxjs';


@Component({
  selector: 'app-socios-tabla-prueba',
  templateUrl: './socios-tabla-prueba.component.html',
  styleUrls: ['./socios-tabla-prueba.component.css']
})
export class SociosTablaPruebaComponent implements AfterViewInit {
  socio : string = "";
  mensaje : string = "";
  respuesta : number = 3;
  displayedColumns: string[] = ['id', 'name', 'surnames', 'phone', 'email','actions'];
  dataSource : any;
  apiUrl:string  = 'http://35.180.22.126:8000/api/';
  socios:any = [];
  codeError : string = "";

  constructor(private router:Router) { }
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

  ngOnInit(): void {
    this.getAllSocios()
  }
  getAllSocios(){
    axios.get(this.apiUrl + 'socios').then((response) =>{
      this.dataSource =new MatTableDataSource<any>(response.data)
      this.dataSource.paginator = this.paginator;
      console.log(response.data);
      console.log(this.dataSource);
      console.log(this.socio);
    })
  }
  deleteSocio(idSocio: number){
    axios.delete(this.apiUrl + 'socios/' + idSocio)
    .then((response) => {
      console.log(response);
      window.location.reload();
    })
    .catch((error) => {
      this.mensaje = error.response.data.code;
    });
  }
}

