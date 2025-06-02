import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceWeaponSectionComponent } from './advance-weapon-section.component';

describe('AdvanceWeaponSectionComponent', () => {
  let component: AdvanceWeaponSectionComponent;
  let fixture: ComponentFixture<AdvanceWeaponSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceWeaponSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceWeaponSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
