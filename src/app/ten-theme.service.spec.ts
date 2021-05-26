import { TestBed } from '@angular/core/testing';

import { TenThemeService } from './ten-theme.service';

describe('TenThemeService', () => {
  let service: TenThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
