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

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FooterComponent,
    LoginComponent,
    SociosComponent,
    NavbarComponent,
    SociosNuevoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
