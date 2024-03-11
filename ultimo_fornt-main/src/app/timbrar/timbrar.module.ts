import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimbrarPageRoutingModule } from './timbrar-routing.module';

import { TimbrarPage } from './timbrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimbrarPageRoutingModule
  ],
  declarations: [TimbrarPage]
})
export class TimbrarPageModule {}
