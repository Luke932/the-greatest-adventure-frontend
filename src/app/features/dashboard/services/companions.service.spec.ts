import { TestBed } from '@angular/core/testing';
import { CompanionsService } from './companions.service';

describe('CompanionsService', () => {
  let service: CompanionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
