import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiornataPage } from './giornata-page';

describe('GiornataPage', () => {
  let component: GiornataPage;
  let fixture: ComponentFixture<GiornataPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiornataPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GiornataPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
