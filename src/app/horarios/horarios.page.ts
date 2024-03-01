import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {
  punto:string="";
  fecha: string="";
  calendarOpened: boolean = false;

  constructor( private navCtrl: NavController, private router: Router) { }
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
  openCalendar() {
    this.calendarOpened = true;
  }
  
  closeCalendar() {
    // Espera un momento antes de cerrar el calendario para permitir hacer clic en el icono del calendario
    setTimeout(() => {
      if (!this.calendarOpened) {
        this.fecha = ""; // Opcional: Reinicia la fecha si se cierra el calendario sin seleccionar nada
      }
    }, 100);
  }

  toggleCalendar() {
    if (this.calendarOpened) {
      this.closeCalendar();
    } else {
      this.openCalendar();
    }
  }
  
}
