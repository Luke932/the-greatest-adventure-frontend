import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestsEdit } from './guests-edit';

describe('GuestsEdit', () => {
  let component: GuestsEdit;
  let fixture: ComponentFixture<GuestsEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestsEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(GuestsEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
