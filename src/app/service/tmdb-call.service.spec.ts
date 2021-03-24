import { TestBed } from '@angular/core/testing';

import { TmdbCallService } from './tmdb-call.service';

describe('TmdbCallService', () => {
  let service: TmdbCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
