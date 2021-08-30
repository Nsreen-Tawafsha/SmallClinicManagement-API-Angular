import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppointementService } from '../services/appointement.service';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-appointement-create',
  templateUrl: './appointement-create.component.html',
  styleUrls: ['./appointement-create.component.css']
})
export class AppointementCreateComponent implements OnInit {

  loginForm = this.fb.group({
    Id: 0,
    DoctorName:'',
    DoctorId: 0,
    PatientName: '',
    PatientId: 0,
    Reservation: new Date(),
  });

  constructor(public fb: FormBuilder, private router: Router, public appointementService: AppointementService, public patientService: PatientService,
    public doctorService: DoctorService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.patientService.getPatientList().subscribe((response: any) => {
      this.patientService.patientList = response;
    }
    )
    this.doctorService.getDoctorList().subscribe((response: any) => {
      this.doctorService.doctorList = response;
    }
    )
    this.loginForm = new FormGroup({
      DoctorID: new FormControl(null, Validators.required),
      PatientID: new FormControl(null, Validators.required),
      Reservation: new FormControl(null, Validators.required),
    })

  }

  onCloseForm() {
    this.router.navigate(['/appointement'])
  }

  onSubmit() {
    this.loginForm.value.Id = this.appointementService.appointementList.length + 1;
    console.log(this.loginForm.value);
    this.appointementService.appointementList.push(this.loginForm.value);
    this.appointementService.submitAppointement(this.loginForm.value);
    this._snackBar.open("Appointment added successfully");
    this.router.navigate(['/appointement'])
    this.onCloseForm();
  }
}
