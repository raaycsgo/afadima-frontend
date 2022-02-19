import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './vistas/noticiasAll/noticias/cards.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './vistas/login/login.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SociosNuevoComponent } from './vistas/sociosAll/socios-new/socios-nuevo.component';
import { SociosTablaPruebaComponent } from './vistas/sociosAll/socios-tabla/socios-tabla-prueba.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoticiasNewComponent } from './vistas/noticiasAll/noticias-new/noticias-new.component';
import { NoticiasTablaComponent } from './vistas/noticiasAll/noticias-tabla/noticias-tabla.component';
import { NoticiasEditComponent } from './vistas/noticiasAll/noticias-edit/noticias-edit.component';
import { NoticiasShowComponent } from './vistas/noticiasAll/noticias-show/noticias-show.component';
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
import { SociosEditComponent } from './vistas/sociosAll/socios-edit/socios-edit.component';
import { ProductoCardsComponent } from './vistas/productosAll/producto-cards/producto-cards.component';
import { ProductoShowComponent } from './vistas/productosAll/producto-show/producto-show.component';
import { ProductoTablaComponent } from './vistas/productosAll/producto-tabla/producto-tabla.component';
import { ProductoNewComponent } from './vistas/productosAll/producto-new/producto-new.component';
import { ProductoEditComponent } from './vistas/productosAll/producto-edit/producto-edit.component';
import { LoginService } from './loginServices/login.service';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    SociosNuevoComponent,
    SociosTablaPruebaComponent,
    NoticiasNewComponent,
    NoticiasTablaComponent,
    NoticiasEditComponent,
    NoticiasShowComponent,
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
    DiscapacidadNewComponent,
    SociosEditComponent,
    ProductoCardsComponent,
    ProductoShowComponent,
    ProductoTablaComponent,
    ProductoNewComponent,
    ProductoEditComponent,
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
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
