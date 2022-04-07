import { TestBed } from '@angular/core/testing';

import { GetVerificationListService } from './get-verification-list.service';

describe('GetVerificationListService', () => {
  let service: GetVerificationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVerificationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
