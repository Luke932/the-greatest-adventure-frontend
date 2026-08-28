import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanionsEdit } from './companions-edit';

describe('CompanionsEdit', () => {
  let component: CompanionsEdit;
  let fixture: ComponentFixture<CompanionsEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanionsEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanionsEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
