import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
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
    this.getAllNoticias()
  }

  getAllNoticias(){
    axios.get(this.apiUrl + 'noticias').then((response) =>{
      this.dataSource =new MatTableDataSource<any>(response.data)
      this.dataSource.paginator = this.paginator;
    })
  }
}
