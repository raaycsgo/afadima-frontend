import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './vistas/cards/cards.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './vistas/login/login.component';
import { FormsModule } from '@angular/forms';
import { SociosComponent } from './vistas/socios-tabla/socios.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SociosNuevoComponent } from './vistas/socios-nuevo/socios-nuevo.component';
import { SociosTablaPruebaComponent } from './vistas/socios-tabla-prueba/socios-tabla-prueba.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UploadImgComponent } from './vistas/upload-img/upload-img.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FooterComponent,
    LoginComponent,
    SociosComponent,
    NavbarComponent,
    SociosNuevoComponent,
    SociosTablaPruebaComponent,
    UploadImgComponent
  ],
  imports: [
    BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
