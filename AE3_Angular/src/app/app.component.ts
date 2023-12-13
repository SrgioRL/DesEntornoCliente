import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AE3-Angular-SRL';
  mostrarNavbar: boolean = true;

  // Actualizar la propiedad 'mostrarNavbar' basándose en la URL
  // para no mostrar el navBar en la página de login
  constructor(private router: Router) {
    this.mostrarNavbar = !this.router.url.includes('/login');

    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verificar si la URL contiene '/login'
        this.mostrarNavbar = !this.router.url.includes('/login');
      }
    });
  }
}
