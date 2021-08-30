import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementDeleteComponent } from './appointement-delete.component';

describe('AppointementDeleteComponent', () => {
  let component: AppointementDeleteComponent;
  let fixture: ComponentFixture<AppointementDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointementDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointementDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
