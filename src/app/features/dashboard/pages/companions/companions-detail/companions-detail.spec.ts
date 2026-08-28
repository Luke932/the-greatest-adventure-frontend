import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanionsDetail } from './companions-detail';

describe('CompanionsDetail', () => {
  let component: CompanionsDetail;
  let fixture: ComponentFixture<CompanionsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanionsDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanionsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
