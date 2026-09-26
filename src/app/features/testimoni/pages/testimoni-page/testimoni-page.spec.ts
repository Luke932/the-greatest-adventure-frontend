import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestimoniPage } from './testimoni-page';

describe('TestimoniPage', () => {
  let component: TestimoniPage;
  let fixture: ComponentFixture<TestimoniPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimoniPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimoniPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
