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
