import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoveDormirePage } from './dove-dormire-page';

describe('DoveDormirePage', () => {
  let component: DoveDormirePage;
  let fixture: ComponentFixture<DoveDormirePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoveDormirePage],
    }).compileComponents();

    fixture = TestBed.createComponent(DoveDormirePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
