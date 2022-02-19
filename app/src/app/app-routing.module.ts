import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscapacidadEditComponent } from './vistas/discapacidadAll/discapacidad-edit/discapacidad-edit.component';
import { DiscapacidadNewComponent } from './vistas/discapacidadAll/discapacidad-new/discapacidad-new.component';
import { DiscapacidadTablaComponent } from './vistas/discapacidadAll/discapacidad-tabla/discapacidad-tabla.component';
import { LoginComponent } from './vistas/login/login.component';
import { NoticiasEditComponent } from './vistas/noticiasAll/noticias-edit/noticias-edit.component';
import { NoticiasNewComponent } from './vistas/noticiasAll/noticias-new/noticias-new.component';
import { NoticiasShowComponent } from './vistas/noticiasAll/noticias-show/noticias-show.component';
import { NoticiasTablaComponent } from './vistas/noticiasAll/noticias-tabla/noticias-tabla.component';
import { CardsComponent } from './vistas/noticiasAll/noticias/cards.component';
import { NumerarioEditComponent } from './vistas/numerarioAll/numerario-edit/numerario-edit.component';
import { NumerarioNewComponent } from './vistas/numerarioAll/numerario-new/numerario-new.component';
import { NumerarioTablaComponent } from './vistas/numerarioAll/numerario-tabla/numerario-tabla.component';
import { PaginaUserComponent } from './vistas/pagina-user/pagina-user.component';
import { ProductoCardsComponent } from './vistas/productosAll/producto-cards/producto-cards.component';
import { ProductoEditComponent } from './vistas/productosAll/producto-edit/producto-edit.component';
import { ProductoNewComponent } from './vistas/productosAll/producto-new/producto-new.component';
import { ProductoShowComponent } from './vistas/productosAll/producto-show/producto-show.component';
import { ProductoTablaComponent } from './vistas/productosAll/producto-tabla/producto-tabla.component';
import { ServiciosEditComponent } from './vistas/serviciosAll/servicios-edit/servicios-edit.component';
import { ServiciosNewComponent } from './vistas/serviciosAll/servicios-new/servicios-new.component';
import { ServiciosShowComponent } from './vistas/serviciosAll/servicios-show/servicios-show.component';
import { ServiciosTablaComponent } from './vistas/serviciosAll/servicios-tabla/servicios-tabla.component';
import { ServiciosComponent } from './vistas/serviciosAll/servicios/servicios.component';
import { SociosEditComponent } from './vistas/sociosAll/socios-edit/socios-edit.component';
import { SociosNuevoComponent } from './vistas/sociosAll/socios-new/socios-nuevo.component';
import { SociosTablaPruebaComponent } from './vistas/sociosAll/socios-tabla/socios-tabla-prueba.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'descarga-usuario', component: PaginaUserComponent },
  { path: 'noticias', component: CardsComponent },
  { path: 'noticias/:numero', component: NoticiasShowComponent },
  { path: 'admin/noticias/edit/:numero', component: NoticiasEditComponent },
  { path: 'admin/noticias/new', component: NoticiasNewComponent },
  { path: 'admin/noticias', component: NoticiasTablaComponent },
  { path: 'admin/discapacidad', component: DiscapacidadTablaComponent },
  { path: 'admin/discapacidad/edit/:numero', component: DiscapacidadEditComponent },
  { path: 'admin/discapacidad/new', component: DiscapacidadNewComponent },
  { path: 'admin/numerario', component: NumerarioTablaComponent },
  { path: 'admin/numerario/edit/:numero', component: NumerarioEditComponent },
  { path: 'admin/numerario/new', component: NumerarioNewComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicios/numero', component: ServiciosShowComponent },
  { path: 'admin/servicios/edit/:numero', component: ServiciosEditComponent},
  { path: 'admin/servicios/new', component: ServiciosNewComponent},
  { path: 'admin/servicios', component: ServiciosTablaComponent },
  { path: 'admin/socios', component: SociosTablaPruebaComponent },
  { path: 'admin/socios/new', component: SociosNuevoComponent },
  { path: 'admin/socios/edit/:numero', component: SociosEditComponent },
  { path: 'productos', component: ProductoCardsComponent },
  { path: 'productos/numero', component: ProductoShowComponent },
  { path: 'admin/productos/edit/numero', component: ProductoEditComponent },
  { path: 'admin/productos/new', component: ProductoNewComponent },
  { path: 'admin/productos', component: ProductoTablaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
