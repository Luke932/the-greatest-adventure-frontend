import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanionForm } from './companion-form';

describe('CompanionForm', () => {
  let component: CompanionForm;
  let fixture: ComponentFixture<CompanionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanionForm],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanionForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
