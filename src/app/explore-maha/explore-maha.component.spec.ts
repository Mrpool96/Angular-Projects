import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMahaComponent } from './explore-maha.component';

describe('ExploreMahaComponent', () => {
  let component: ExploreMahaComponent;
  let fixture: ComponentFixture<ExploreMahaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreMahaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreMahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
