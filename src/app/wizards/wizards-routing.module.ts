import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WizardsComponent } from './wizards.component';

const routes: Routes = [
  {
    path: '',
    component: WizardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardsRoutingModule { }
