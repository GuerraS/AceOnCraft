import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackGearComponent } from './attack-gear.component';

describe('AttackGearComponent', () => {
  let component: AttackGearComponent;
  let fixture: ComponentFixture<AttackGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackGearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
