import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComeArrivarePage } from './come-arrivare-page';

describe('ComeArrivarePage', () => {
  let component: ComeArrivarePage;
  let fixture: ComponentFixture<ComeArrivarePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComeArrivarePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ComeArrivarePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
