import { Component } from '@angular/core';
import { WizardsService } from '../services/wizards.service';
import { Observable, switchMap } from 'rxjs';
import { Wizard } from '../models/wizard.model';

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.component.html',
  styleUrls: ['./wizards.component.scss']
})
export class WizardsComponent {
  wizardsList$: Observable<Wizard[]> = new Observable<Wizard[]>();
  currentWizard$: Observable<Wizard | undefined> = new Observable<Wizard | undefined>();

  constructor(private readonly wizardzService: WizardsService) {
    this.wizardsList$ = this.wizardzService.getWizards();
    this.currentWizard$ = this.wizardzService.getCurrentWizard();
  }

  getDetails() {
    this.wizardsList$.pipe(
      switchMap((wizards) => this.wizardzService.getDetailsWizard(wizards[0].id))
    ).subscribe()
  }
}
