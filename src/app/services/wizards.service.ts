import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, map, of, switchMap, tap } from 'rxjs';
import { IWizard, Wizard } from '../models/wizard.model';

@Injectable({
  providedIn: 'root'
})
export class WizardsService {
  private baseUrl = 'https://wizard-world-api.herokuapp.com';
  private wizardsArray:Wizard[] = [];
  private wizardsArray$: BehaviorSubject<Wizard[]> = new BehaviorSubject<Wizard[]>(this.wizardsArray)
  private currentWizard$: BehaviorSubject<Wizard | undefined> = new BehaviorSubject<Wizard | undefined>(undefined);

  
  constructor(private readonly http: HttpClient) {
    this.getWizardsFromApi().subscribe();
   }


  getWizards() {
    return this.wizardsArray$.asObservable().pipe(tap(console.log));
  }

  getCurrentWizard() {
    // this.wizardsArray$.pipe((map(wizards => wizards.find((x => x.id === id)), switchMap((resp) => of(this.currentWizard$.next(resp))))))
    return this.currentWizard$.asObservable();
  }

  getDetailsWizard(id:string) {
    return this.http.get(`${this.baseUrl}/Wizards/${id}`).pipe(map((wizard:any) => this.currentWizard$.next(wizard)));
  }



  private getWizardsFromApi() {
    return this.http.get(`${this.baseUrl}/wizards`).pipe(
      map((responseArray:any) => responseArray.map((resp:IWizard) => new Wizard(resp))),
      map((wizards:Wizard[]) => this.setWizards(wizards))
    );
  }

  private setWizards(wizards: Wizard[]) {
    this.wizardsArray = wizards;
        this.wizardsArray$.next(this.wizardsArray);
  }

}
