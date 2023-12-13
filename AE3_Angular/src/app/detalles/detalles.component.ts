import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})

// Propiedades para mostrar detalles del videojuego
export class DetallesComponent {
  id: number;
  titulo: string;
  compania: string;
  imagen: string;
  valoracion: number;
  usuario: string;

    // Constructor del componente con inyección de dependencia de ActivatedRoute y Router

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id = route.snapshot.params['id'];
    this.imagen = route.snapshot.queryParams['img'];
    this.titulo = route.snapshot.queryParams['titulo'];
    this.compania = route.snapshot.queryParams['compania'];
    this.valoracion = route.snapshot.queryParams['valoracion'];
    this.usuario = route.snapshot.queryParams['usuario'];
  }

  // Método para navegar de vuelta a la lista de videojuegos
  volver() {
    this.router.navigate(['/videojuegos']);
  }
}
