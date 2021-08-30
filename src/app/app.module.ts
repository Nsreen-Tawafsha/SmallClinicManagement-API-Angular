import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DoctorComponent } from './doctor/doctor.component';
import { AppointementComponent } from './appointement/appointement.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientService } from './services/patient.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { AppointementDetailComponent } from './appointement-detail/appointement-detail.component';
import { AppointementCreateComponent } from './appointement-create/appointement-create.component';
import { AppointementEditComponent } from './appointement-edit/appointement-edit.component';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY } from '@angular/material/snack-bar';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { DoctorDeleteComponent } from './doctor-delete/doctor-delete.component';
import { AppointementDeleteComponent } from './appointement-delete/appointement-delete.component'




@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DoctorComponent,
    AppointementComponent,
    PatientCreateComponent,
    PatientDetailComponent,
    PatientEditComponent,
    DoctorCreateComponent,
    DoctorEditComponent,
    DoctorDetailComponent,
    AppointementDetailComponent,
    AppointementCreateComponent,
    AppointementEditComponent,
    PatientDeleteComponent,
    DoctorDeleteComponent,
    AppointementDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  entryComponents: [PatientCreateComponent],
  providers: [PatientService, { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
