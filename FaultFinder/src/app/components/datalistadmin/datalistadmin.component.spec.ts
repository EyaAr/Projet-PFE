import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalistadminComponent } from './datalistadmin.component';

describe('DatalistadminComponent', () => {
  let component: DatalistadminComponent;
  let fixture: ComponentFixture<DatalistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatalistadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
