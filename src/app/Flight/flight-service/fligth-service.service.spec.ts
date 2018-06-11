import { TestBed, inject } from '@angular/core/testing';

import { FligthServiceService } from './fligth-service.service';

describe('FligthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FligthServiceService]
    });
  });

  it('should be created', inject([FligthServiceService], (service: FligthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
