import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTable } from './section-table';

describe('SectionTable', () => {
  let component: SectionTable;
  let fixture: ComponentFixture<SectionTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
