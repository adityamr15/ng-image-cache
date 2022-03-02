import { TestBed } from '@angular/core/testing';

import { NgxImageCacheService } from './ngx-image-cache.service';

describe('NgxImageCacheService', () => {
  let service: NgxImageCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
