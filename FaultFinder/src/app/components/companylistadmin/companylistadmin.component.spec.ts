import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanylistadminComponent } from './companylistadmin.component';

describe('CompanylistadminComponent', () => {
  let component: CompanylistadminComponent;
  let fixture: ComponentFixture<CompanylistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanylistadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanylistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
