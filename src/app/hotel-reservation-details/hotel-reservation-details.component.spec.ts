import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservationDetailsComponent } from './hotel-reservation-details.component';

describe('HotelReservationDetailsComponent', () => {
  let component: HotelReservationDetailsComponent;
  let fixture: ComponentFixture<HotelReservationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelReservationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelReservationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
