import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideGearComponent } from './aside-gear.component';

describe('AsideGearComponent', () => {
  let component: AsideGearComponent;
  let fixture: ComponentFixture<AsideGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideGearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
