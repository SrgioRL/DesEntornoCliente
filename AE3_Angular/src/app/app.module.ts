// Importaciones de módulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Importaciones de componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

// Definición de rutas para la navegación
const routes: Routes = [
  { path: 'videojuegos', component: VideojuegosComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 
];

// Declaración de componentes utilizados en la aplicación
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideojuegosComponent,
    DetallesComponent,
    ContactoComponent,
    AboutComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
