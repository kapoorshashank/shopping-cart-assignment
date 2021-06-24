import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CommonService],
    schemas: [ NO_ERRORS_SCHEMA ],
  });
  service = TestBed.inject(CommonService);
 } );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
