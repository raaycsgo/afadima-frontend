import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './vistas/noticiasAll/noticias/cards.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './vistas/login/login.component';
import { FormsModule } from '@angular/forms';
import { SociosComponent } from './vistas/socios-tabla/socios.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SociosNuevoComponent } from './vistas/sociosAll/socios-nuevo/socios-nuevo.component';
import { SociosTablaPruebaComponent } from './vistas/sociosAll/socios-tabla-prueba/socios-tabla-prueba.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UploadImgComponent } from './vistas/upload-img/upload-img.component';
import { NoticiasNewComponent } from './vistas/noticiasAll/noticias-new/noticias-new.component';
import { NoticiasTablaComponent } from './vistas/noticiasAll/noticias-tabla/noticias-tabla.component';
import { NoticiasEditComponent } from './vistas/noticiasAll/noticias-edit/noticias-edit.component';
import { NoticiasShowComponent } from './vistas/noticiasAll/noticias-show/noticias-show.component';
import { LogoutComponent } from './vistas/logout/logout.component';
import { ServiciosComponent } from './vistas/serviciosAll/servicios/servicios.component';
import { ServiciosShowComponent } from './vistas/serviciosAll/servicios-show/servicios-show.component';
import { ServiciosTablaComponent } from './vistas/serviciosAll/servicios-tabla/servicios-tabla.component';
import { ServiciosEditComponent } from './vistas/serviciosAll/servicios-edit/servicios-edit.component';
import { ServiciosNewComponent } from './vistas/serviciosAll/servicios-new/servicios-new.component';
import { NumerarioTablaComponent } from './vistas/numerarioAll/numerario-tabla/numerario-tabla.component';
import { NumerarioEditComponent } from './vistas/numerarioAll/numerario-edit/numerario-edit.component';
import { NumerarioNewComponent } from './vistas/numerarioAll/numerario-new/numerario-new.component';
import { PaginaUserComponent } from './vistas/pagina-user/pagina-user.component';
import { DiscapacidadTablaComponent } from './vistas/discapacidadAll/discapacidad-tabla/discapacidad-tabla.component';
import { DiscapacidadEditComponent } from './vistas/discapacidadAll/discapacidad-edit/discapacidad-edit.component';
import { DiscapacidadNewComponent } from './vistas/discapacidadAll/discapacidad-new/discapacidad-new.component';


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
    UploadImgComponent,
    NoticiasNewComponent,
    NoticiasTablaComponent,
    NoticiasEditComponent,
    NoticiasShowComponent,
    LogoutComponent,
    ServiciosComponent,
    ServiciosShowComponent,
    ServiciosTablaComponent,
    ServiciosEditComponent,
    ServiciosNewComponent,
    NumerarioTablaComponent,
    NumerarioEditComponent,
    NumerarioNewComponent,
    PaginaUserComponent,
    DiscapacidadTablaComponent,
    DiscapacidadEditComponent,
    DiscapacidadNewComponent
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
