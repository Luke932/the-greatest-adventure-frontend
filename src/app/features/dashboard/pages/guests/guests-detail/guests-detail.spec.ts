import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestsDetail } from './guests-detail';

describe('GuestsDetail', () => {
  let component: GuestsDetail;
  let fixture: ComponentFixture<GuestsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestsDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(GuestsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
