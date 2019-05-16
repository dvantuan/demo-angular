import { TestBed } from '@angular/core/testing';

import { LibTuandangService } from './lib-tuandang.service';

describe('LibTuandangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibTuandangService = TestBed.get(LibTuandangService);
    expect(service).toBeTruthy();
  });
});
