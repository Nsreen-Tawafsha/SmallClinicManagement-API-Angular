import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementDetailComponent } from './appointement-detail.component';

describe('AppointementDetailComponent', () => {
  let component: AppointementDetailComponent;
  let fixture: ComponentFixture<AppointementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointementDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
