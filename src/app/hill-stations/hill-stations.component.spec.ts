import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HillStationsComponent } from './hill-stations.component';

describe('HillStationsComponent', () => {
  let component: HillStationsComponent;
  let fixture: ComponentFixture<HillStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HillStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HillStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
