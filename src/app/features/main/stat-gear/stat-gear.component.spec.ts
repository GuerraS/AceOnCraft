import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatGearComponent } from './stat-gear.component';

describe('StatGearComponent', () => {
  let component: StatGearComponent;
  let fixture: ComponentFixture<StatGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatGearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
