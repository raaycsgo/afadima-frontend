import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { LoginService } from '../../../loginServices/login.service';
@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
  numero: number = 0;
  apiURL: string = "http://35.180.22.126:8000/api/"
  numerarioId:string = '';
  producto:any = {};
  numerarioNumero: string ="";
  formData:any = new FormData();
  title:string = '';
  description:string = '';
  errorMensaje : string = '';
  error: Array<any> = [false, 'alert alert-danger'];
  public user:any;

  constructor(private _activeRouter: ActivatedRoute, private router: Router, public loginService: LoginService) { }

  async ngOnInit() {

    await this.loginService.getUser().then(response => this.user = response);
    this.loginService.controlRolUser();
    this.loginService.controlRolUserAdmin();
    
    this._activeRouter.params.subscribe((params: any) => {
      this.numero = params.numero;
    })

    this.getIdNoticia()

  }

  getIdNoticia() {
    axios.get(this.apiURL + 'productos/' + this.numero).then((response) => {
      this.producto = response.data;
      this.numerarioNumero = response.data.numerarioId.id;
          console.log(this.producto);
    })
  }

  fileEvent(fileInput: any){
    let file = (<HTMLInputElement>fileInput.target).files
    if (file == null) {
      return;
    }

    this.formData.append("image", file[0]);
  }

  uploadForm(){

    this.formData.append("name", this.title);
    this.formData.append("description", this.description);
    this.formData.append("socioId", this.numerarioId);
    
    axios.post(this.apiURL + 'productos/' + this.numero + '/edit', this.formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) =>{
      this.errorMensaje = response.data.status;
      this.error = [true, 'success']
      this.router.navigate(['admin/productos']);
    }).catch((error) => {
      this.errorMensaje = error.response.data.message;
      this.error = [true, 'danger']
    });
   
  }


  

}