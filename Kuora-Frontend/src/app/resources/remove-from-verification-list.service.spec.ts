import { TestBed } from '@angular/core/testing';

import { RemoveFromVerificationListService } from './remove-from-verification-list.service';

describe('RemoveFromVerificationListService', () => {
  let service: RemoveFromVerificationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveFromVerificationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
