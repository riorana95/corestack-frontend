import { TestBed } from '@angular/core/testing';

import { AddQuestion } from './add-question-service';

describe('AddQuestion', () => {
  let service: AddQuestion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddQuestion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
