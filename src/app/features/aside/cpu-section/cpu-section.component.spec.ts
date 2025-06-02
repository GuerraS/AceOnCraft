import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuSectionComponent } from './cpu-section.component';

describe('CpuSectionComponent', () => {
  let component: CpuSectionComponent;
  let fixture: ComponentFixture<CpuSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpuSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
