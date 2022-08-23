import { TestBed } from '@angular/core/testing';

import { NgxBpExampleService } from './ngx-bp-example.service';

describe('NgxBpExampleService', () => {
  let service: NgxBpExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBpExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
