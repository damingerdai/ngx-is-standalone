import { TestBed } from '@angular/core/testing';

import { NgxIsStandaloneService } from './ngx-is-standalone.service';

describe('NgxIsStandaloneService', () => {
  let service: NgxIsStandaloneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIsStandaloneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
