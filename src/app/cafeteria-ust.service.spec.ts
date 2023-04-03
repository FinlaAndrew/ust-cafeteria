import { TestBed } from '@angular/core/testing';

import { CafeteriaUstService } from './cafeteria-ust.service';

describe('CafeteriaUstService', () => {
  let service: CafeteriaUstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafeteriaUstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
