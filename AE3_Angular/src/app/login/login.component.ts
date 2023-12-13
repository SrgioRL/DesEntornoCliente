import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
  user: string;
  contrasena: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuarios: Usuario[] = [
    { user: 'Sergio', contrasena: '1234' },
    { user: 'Marina', contrasena: '1234' },
  ];

  // Propiedades para almacenar el usuario y la contraseña introducidos

  user: string = '';
  contrasena: string = '';

  // Mensaje de error para mostrar
  errorMessage: string = '';

  // Constructor del componente con inyección de dependencia de Router.
  constructor(private router: Router) {}

  // Método para realizar la autenticación al hacer clic en el botón "Iniciar Sesión"

  login() {
    const user = this;

    // Verificar si se han ingresado usuario y contraseña
    // y buscar el usuario en el array de usuarios.

    if (this.user && this.contrasena) {
      const usuarioValido = this.usuarios.find(function (u) {
        return u.user == user.user && u.contrasena == user.contrasena;
      });

      // Si el usuario es válido, almacenar el nombre de usuario en sessionStorage 
      // y redirigir a la página de videojuegos.
      if (usuarioValido) {
        sessionStorage.setItem('userName', this.user);
        this.router.navigate(['/videojuegos']);

        // Mostrar mensaje de error si el usuario no es válido
      } else {
        this.errorMessage = 'Usuario o contraseña incorrecta';
      }

      // Mostrar mensaje de error si no se han completado todos los campos
    } else {
      this.errorMessage = 'Por favor, completa todos los campos';
    }
  }
}
