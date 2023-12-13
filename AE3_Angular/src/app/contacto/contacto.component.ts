// Componente ContactoComponent
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})

// Propiedades del componente para la información de contacto
export class ContactoComponent {
  nombre: string;
  ubicacion: string;
  email: string;
  tlf: number;

  // Constreuctor con inicialización de propiedades con valores por defecto
  constructor() {
    this.nombre = 'GameVault';
    this.ubicacion = 'Córdoba';
    this.email = 'ejemplo@ejemplo.com';
    this.tlf = 957111222;
      }
}