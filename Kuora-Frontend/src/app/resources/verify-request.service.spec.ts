import { TestBed } from '@angular/core/testing';

import { VerifyRequestService } from './verify-request.service';

describe('VerifyRequestService', () => {
  let service: VerifyRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
