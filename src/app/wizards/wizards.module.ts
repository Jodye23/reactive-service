import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardsRoutingModule } from './wizards-routing.module';
import { WizardsComponent } from './wizards.component';


@NgModule({
  declarations: [
    WizardsComponent
  ],
  imports: [
    CommonModule,
    WizardsRoutingModule
  ]
})
export class WizardsModule { }
