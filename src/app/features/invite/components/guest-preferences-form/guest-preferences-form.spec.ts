import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestPreferencesForm } from './guest-preferences-form';

describe('GuestPreferencesForm', () => {
  let component: GuestPreferencesForm;
  let fixture: ComponentFixture<GuestPreferencesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestPreferencesForm],
    }).compileComponents();

    fixture = TestBed.createComponent(GuestPreferencesForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
