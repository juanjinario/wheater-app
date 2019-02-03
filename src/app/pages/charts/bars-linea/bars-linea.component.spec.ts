import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsLineaComponent } from './bars-linea.component';

describe('BarsLineaComponent', () => {
  let component: BarsLineaComponent;
  let fixture: ComponentFixture<BarsLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
