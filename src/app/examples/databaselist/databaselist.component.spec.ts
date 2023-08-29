import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaselistComponent } from './databaselist.component';

describe('DatabaselistComponent', () => {
  let component: DatabaselistComponent;
  let fixture: ComponentFixture<DatabaselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaselistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
