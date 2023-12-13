import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Clase que define la estructura de un videojuego
export class Videojuego {
  constructor(
    public id: number,
    public titulo: string,
    public compania: string,
    public imagen: string,
    public valoracion: number
  ) {}
}

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.scss'],
})
export class VideojuegosComponent implements OnInit {
  // Nombre de usuario obtenido de sessionStorage
  userName: string = '';

  // Array de objetos con información de varios videojuegos
  videojuego: Videojuego[] = [
    new Videojuego(1, 'Hollow Knight', 'Team Cherry', '/assets/img/hk.png', 10),
    new Videojuego(2, 'Blasphemous', 'The Game Kitchen','/assets/img/blasp.png', 10),
    new Videojuego(3, 'Castlevania: SOTN','Konami','/assets/img/sotn.png', 10),
    new Videojuego(4,'The Witcher 3: Wild Hunt', 'CD Projekt Red', '/assets/img/witcher.png',10),
    new Videojuego(5,'The Legend of Zelda: The Wind Waker','Nintendo','/assets/img/zelda.png',10),
    new Videojuego(6, 'Bloodborne', 'From Software', '/assets/img/bb.png', 10),
    new Videojuego(7, 'Disco Elysium', 'ZA/UM', '/assets/img/discel.png', 10),
  ];

  // Constructor del componente con inyección de dependencia de ActivatedRoute y Router
  constructor(private route: ActivatedRoute, private router: Router) {}

  // Obtener el nombre de usuario almacenado en sessionStorage
  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName') || '';
  }

  // Método para cerrar sesión, eliminando el nombre de usuario y redirigiendo a la página de inicio de sesión
  logout() {
    this.userName = '';
    this.router.navigate(['/login']);
  }
}
