import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimlistadminComponent } from './claimlistadmin.component';

describe('ClaimlistadminComponent', () => {
  let component: ClaimlistadminComponent;
  let fixture: ComponentFixture<ClaimlistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimlistadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimlistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
