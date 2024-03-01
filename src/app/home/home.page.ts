import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username="m";
  password="1";

  constructor(private router: Router) {}
  ingresar() {
    // Verificar si los campos están vacíos
    if (!this.username || !this.password) {
      alert('Por favor, complete todos los campos');
      return;
    }
  
    // Verificar las credenciales (aquí deberías realizar la verificación con tu lógica de autenticación)
    if (this.username === 'maicol' && this.password === '123') {
      // Si las credenciales son correctas, redireccionar a la página de administrador
      this.router.navigateByUrl('/admin');
    } else {
      // Si las credenciales son incorrectas, mostrar un mensaje de error
      alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
  }
}  