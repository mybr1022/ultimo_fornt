import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoMensajeroPage } from './nuevo-mensajero.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoMensajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoMensajeroPageRoutingModule {}
