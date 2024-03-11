import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-timbrar',
  templateUrl: './timbrar.page.html',
  styleUrls: ['./timbrar.page.scss'],
})
export class TimbrarPage implements OnInit {
  cedula: string ="";
  usuario: string="";
  horaIngreso: string="";
  segundoCorte:string="";
  registros: { cedula: string, horaIngreso: string }[] = [];


  actualizarSegundoCorte() {
    // Buscar si la cédula ingresada coincide con alguna cédula previamente registrada
    const registro = this.registros.find(registro => registro.cedula === this.cedula);
    if (registro) {
      this.segundoCorte = registro.horaIngreso;
    }
    console.log(this.registros);
  }
  
  actualizarHoraRegistro() {
    // Verificar si el valor de la cédula ha cambiado
    if (this.cedula.trim() !== this.registros[this.registros.length - 1]?.cedula.trim()) {
      // Actualizar la hora de ingreso con la hora actual
      const fechaActual = new Date();
      const hora = fechaActual.getHours();
      const minutos = fechaActual.getMinutes();
      // Formatear la hora como sea necesario, aquí se muestra un ejemplo simple
      this.horaIngreso = hora + ':' + (minutos < 10 ? '0' : '') + minutos;
      this.registrarCedula(); // Llamar a la función para registrar la cédula y hora de ingreso
      console.log(this.registros);
    }
  
  }

  registrarCedula() {
    // Verificar si la cédula ya está registrada
    const existente = this.registros.find(registro => registro.cedula === this.cedula);
    if (!existente) {
      // Si no está registrada, añadir una nueva entrada a la estructura de datos
      this.registros.push({ cedula: this.cedula, horaIngreso: this.horaIngreso });
    }
  }

  constructor(private navCtrl: NavController, private router: Router) { }

  irAPagina(pagina: string){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        // Puedes agregar parámetros adicionales si es necesario
      }
    };
    this.navCtrl.navigateForward('/' + pagina, navigationExtras);
  }

  ngOnInit() {
  }

}
