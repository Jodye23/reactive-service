import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardsComponent } from './wizards.component';

describe('WizardsComponent', () => {
  let component: WizardsComponent;
  let fixture: ComponentFixture<WizardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WizardsComponent]
    });
    fixture = TestBed.createComponent(WizardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
