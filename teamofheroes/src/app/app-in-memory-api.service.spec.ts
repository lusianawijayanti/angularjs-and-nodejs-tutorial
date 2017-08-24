import { TestBed, inject } from '@angular/core/testing';

import { AppInMemoryApiService } from './app-in-memory-api.service';

describe('AppInMemoryApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppInMemoryApiService]
    });
  });

  it('should be created', inject([AppInMemoryApiService], (service: AppInMemoryApiService) => {
    expect(service).toBeTruthy();
  }));
});
