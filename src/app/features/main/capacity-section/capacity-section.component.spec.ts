import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitySectionComponent } from './capacity-section.component';

describe('CapacitySectionComponent', () => {
  let component: CapacitySectionComponent;
  let fixture: ComponentFixture<CapacitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapacitySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapacitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
