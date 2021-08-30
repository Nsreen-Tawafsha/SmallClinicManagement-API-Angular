import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AppointementComponent } from './appointement/appointement.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { AppointementCreateComponent } from './appointement-create/appointement-create.component';
import { AppointementDetailComponent } from './appointement-detail/appointement-detail.component';
import { AppointementEditComponent } from './appointement-edit/appointement-edit.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { DoctorDeleteComponent } from './doctor-delete/doctor-delete.component';
import { AppointementDeleteComponent } from './appointement-delete/appointement-delete.component';

export const routes: Routes = [
  //default path
  { path: '', redirectTo: 'appointement', pathMatch: 'full' },

  {
    path: 'patient', component: PatientComponent, children: [
      { path: '', component: PatientComponent },
      { path: 'create', component: PatientCreateComponent },
      { path: 'detail/:id', component: PatientDetailComponent },
      { path: 'edit/:id', component: PatientEditComponent },
      { path: 'delete/:id', component: PatientDeleteComponent }
    ]
  },

  {
    path: 'patient-create', component: PatientCreateComponent, children: [
      { path: '', component: PatientCreateComponent },
    ]
  },

  {
    path: 'patient-detail', component: PatientDetailComponent, children: [
      { path: '', component: PatientDetailComponent },
      { path: ':id', component: PatientDetailComponent },
    ]
  },

  {
    path: 'patient-edit', component: PatientEditComponent, children: [
      { path: '', component: PatientEditComponent },
      { path: ':id', component: PatientEditComponent },
    ]
  },

  {
    path: 'patient-delete', component: PatientDeleteComponent, children: [
      { path: '', component: PatientDeleteComponent },
      { path: ':id', component: PatientDeleteComponent },
    ]
  },

  //----------------------------------------------------------------------------

  {
    path: 'doctor', component: DoctorComponent, children: [
      { path: '', component: DoctorComponent },
      { path: 'create', component: DoctorCreateComponent },
      { path: 'detail/:id', component: DoctorDetailComponent },
      { path: 'edit/:id', component: DoctorEditComponent },
      { path: 'delete/:id', component: DoctorDeleteComponent }
    ]
  },

  {
    path: 'doctor-create', component: DoctorCreateComponent, children: [
      { path: '', component: DoctorCreateComponent },
    ]
  },

  {
    path: 'doctor-detail', component: DoctorDetailComponent, children: [
      { path: '', component: DoctorDetailComponent },
      { path: ':id', component: DoctorDetailComponent },
    ]
  },

  {
    path: 'doctor-edit', component: DoctorEditComponent, children: [
      { path: '', component: DoctorEditComponent },
      { path: ':id', component: DoctorEditComponent },
    ]
  },

  {
    path: 'doctor-delete', component: DoctorDeleteComponent, children: [
      { path: '', component: DoctorDeleteComponent },
      { path: ':id', component: DoctorDeleteComponent },
    ]
  },

  //-----------------------------------------------------------------------------

  {
    path: 'appointement', component: AppointementComponent, children: [
      { path: '', component: AppointementComponent },
      { path: 'create', component: AppointementCreateComponent },
      { path: 'detail/:id', component: AppointementDetailComponent },
      { path: 'edit/:id', component: AppointementEditComponent },
      { path: 'delete/:id', component: AppointementDeleteComponent }
    ]
  },

  {
    path: 'appointement-create', component: AppointementCreateComponent, children: [
      { path: '', component: AppointementCreateComponent },
    ]
  },

  {
    path: 'apoointement-detail', component: AppointementDetailComponent, children: [
      { path: '', component: AppointementDetailComponent },
      { path: ':id', component: AppointementDetailComponent },
    ]
  },

  {
    path: 'appointment-edit', component:AppointementEditComponent, children: [
      { path: '', component: AppointementEditComponent },
      { path: ':id', component: AppointementEditComponent },
    ]
  },

  {
    path: 'apoointment-delete', component: AppointementDeleteComponent, children: [
      { path: '', component: AppointementDeleteComponent },
      { path: ':id', component: AppointementDeleteComponent },
    ]
  },


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
