import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherExtraInfoComponent } from './weather-extra-info.component';

describe('WeatherExtraInfoComponent', () => {
  let component: WeatherExtraInfoComponent;
  let fixture: ComponentFixture<WeatherExtraInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherExtraInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
