import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedPieComponent } from './nested-pie.component';

describe('NestedPieComponent', () => {
  let component: NestedPieComponent;
  let fixture: ComponentFixture<NestedPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
