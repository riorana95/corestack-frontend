import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewDashboard } from './interview-dashboard';

describe('Interview', () => {
  let component: InterviewDashboard;
  let fixture: ComponentFixture<InterviewDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
