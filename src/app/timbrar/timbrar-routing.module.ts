import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimbrarPage } from './timbrar.page';

const routes: Routes = [
  {
    path: '',
    component: TimbrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimbrarPageRoutingModule {}
