import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-nuevo-mensajero',
  templateUrl: './nuevo-mensajero.page.html',
  styleUrls: ['./nuevo-mensajero.page.scss'],
})
export class NuevoMensajeroPage implements OnInit {
punto:string="";
cedula:string="";
nombre:string="";
codigo:string="";



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

}
