import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvasionSectionComponent } from './evasion-section.component';

describe('EvasionSectionComponent', () => {
  let component: EvasionSectionComponent;
  let fixture: ComponentFixture<EvasionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvasionSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvasionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
