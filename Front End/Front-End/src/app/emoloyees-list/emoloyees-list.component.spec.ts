import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoloyeesListComponent } from './emoloyees-list.component';

describe('EmoloyeesListComponent', () => {
  let component: EmoloyeesListComponent;
  let fixture: ComponentFixture<EmoloyeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoloyeesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmoloyeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
