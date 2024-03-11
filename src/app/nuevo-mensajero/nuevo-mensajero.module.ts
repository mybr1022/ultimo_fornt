import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoMensajeroPageRoutingModule } from './nuevo-mensajero-routing.module';

import { NuevoMensajeroPage } from './nuevo-mensajero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoMensajeroPageRoutingModule
  ],
  declarations: [NuevoMensajeroPage]
})
export class NuevoMensajeroPageModule {}
