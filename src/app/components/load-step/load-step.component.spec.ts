import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadStepComponent } from './load-step.component';

describe('LoadStepComponent', () => {
  let component: LoadStepComponent;
  let fixture: ComponentFixture<LoadStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
