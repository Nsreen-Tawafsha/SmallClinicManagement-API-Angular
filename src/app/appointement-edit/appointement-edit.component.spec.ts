import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementEditComponent } from './appointement-edit.component';

describe('AppointementEditComponent', () => {
  let component: AppointementEditComponent;
  let fixture: ComponentFixture<AppointementEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointementEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
