import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent implements OnInit {

  constructor(private patientService: PatientService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    if (this.patientService.patientPerson.Id) {
      this.patientService.DeletePatient(this.patientService.patientPerson);
      console.log("Deeeeleeete")
      this._snackBar.open("Patient Deleted Successfully");
      this.router.navigate(['/patient']);
    }
  }



}
