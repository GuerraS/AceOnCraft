import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardWeaponSectionComponent } from './standard-weapon-section.component';

describe('StandardWeaponSectionComponent', () => {
  let component: StandardWeaponSectionComponent;
  let fixture: ComponentFixture<StandardWeaponSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardWeaponSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardWeaponSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
