import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiocoPage } from './gioco-page';

describe('GiocoPage', () => {
  let component: GiocoPage;
  let fixture: ComponentFixture<GiocoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiocoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GiocoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
