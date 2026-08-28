import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanionsPage } from './companions-page';

describe('CompanionsPage', () => {
  let component: CompanionsPage;
  let fixture: ComponentFixture<CompanionsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanionsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanionsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
