import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestPracticeParent } from './unit-test-practice-parent';

describe('UnitTestPracticeParent', () => {
  let component: UnitTestPracticeParent;
  let fixture: ComponentFixture<UnitTestPracticeParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitTestPracticeParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTestPracticeParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
