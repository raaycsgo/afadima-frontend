import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginService } from '../../../loginServices/login.service';
import axios from 'axios';

@Component({
  selector: 'app-noticias-tabla',
  templateUrl: './noticias-tabla.component.html',
  styleUrls: ['./noticias-tabla.component.css']
})
export class NoticiasTablaComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'description', 'imgUrl', 'socioId', 'actions'];
  dataSource : any;
  apiUrl:string  = 'http://35.180.22.126:8000/api/';
  imagenesUrl:string  = 'http://35.180.22.126:8000/';
  socios:any = [];
  user:any;
  mensaje:string = '';
  idDelete:number = 0;

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

  constructor(public loginService: LoginService) { }

  async ngOnInit() {
    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserAdmin();

    this.getAllNoticias()
  }

  getAllNoticias(){
    axios.get(this.apiUrl + 'noticias').then((response) =>{
      this.dataSource =new MatTableDataSource<any>(response.data)
      this.dataSource.paginator = this.paginator;
    })
  }

  guardarDelete(idDelete:number){
    this.idDelete = idDelete
  }

  deleteNoticia(){
    axios.delete(this.apiUrl + 'noticias/' + this.idDelete)
    .then((response) => {
      this.mensaje = response.data
      console.log(response);
      
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      this.mensaje = error.response.data.code;
    });
  }
}
