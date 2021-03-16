import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketBookingsComponent } from './ticket-bookings.component';

describe('TicketBookingsComponent', () => {
  let component: TicketBookingsComponent;
  let fixture: ComponentFixture<TicketBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
