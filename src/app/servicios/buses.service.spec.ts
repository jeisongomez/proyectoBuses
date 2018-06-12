import { TestBed, inject } from '@angular/core/testing';

import { BusesService } from './buses.service';

describe('BusesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusesService]
    });
  });

  it('should be created', inject([BusesService], (service: BusesService) => {
    expect(service).toBeTruthy();
  }));
});
