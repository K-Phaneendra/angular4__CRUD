import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDataComponent } from './employees-data.component';

describe('EmployeesDataComponent', () => {
  let component: EmployeesDataComponent;
  let fixture: ComponentFixture<EmployeesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
