import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseSectionComponent } from './defense-section.component';

describe('DefenseSectionComponent', () => {
  let component: DefenseSectionComponent;
  let fixture: ComponentFixture<DefenseSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefenseSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefenseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
