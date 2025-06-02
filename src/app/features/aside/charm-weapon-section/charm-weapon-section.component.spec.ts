import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharmWeaponSectionComponent } from './charm-weapon-section.component';

describe('CharmWeaponSectionComponent', () => {
  let component: CharmWeaponSectionComponent;
  let fixture: ComponentFixture<CharmWeaponSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharmWeaponSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharmWeaponSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
