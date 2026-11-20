import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestbookPage } from './guestbook-page';

describe('GuestbookPage', () => {
  let component: GuestbookPage;
  let fixture: ComponentFixture<GuestbookPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestbookPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GuestbookPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
