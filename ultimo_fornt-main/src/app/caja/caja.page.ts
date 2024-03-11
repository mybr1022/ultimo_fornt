import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.page.html',
  styleUrls: ['./caja.page.scss'],
})
export class CajaPage implements OnInit {
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
