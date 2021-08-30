import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';
import { CountryService } from '../services/country.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  patient: Patient;
  countryList: any[] = [];
  editPatientForm = this.formBuilder.group({
    Id: 0,
    FirstName: "",
    LastName: '',
    Birthday: new Date(),
    Gender: '',
    PhoneNumber: 0,
    Email: '',
    Address: '',
    RegistrationDate: new Date(),
    SSN: 0,
    Country: '',
  });

  constructor(public patientService: PatientService, private formBuilder: FormBuilder, private router: Router, private countryService: CountryService,
    private _snackBar: MatSnackBar) {
    this.patient = {
      Id: 0,
      FirstName: '',
      LastName: '',
      Birthday: new Date(),
      Gender: '',
      PhoneNumber: 0,
      Email: '',
      Address: '',
      RegistrationDate: new Date(),
      SSN: 0,
      Country: ''
    }
  }

  ngOnInit(): void {
    this.patient = this.patientService.patientPerson;

    this.editPatientForm = new FormGroup({
      Id: new FormControl(this.patient.Id),
      FirstName: new FormControl(this.patient.FirstName),
      LastName: new FormControl(this.patient.LastName),
      Email: new FormControl(this.patient.Email),
      Gender: new FormControl(this.patient.Gender),
      PhoneNumber: new FormControl(this.patient.PhoneNumber),
      RegistrationDate: new FormControl(this.patient.RegistrationDate),
      SSN: new FormControl(this.patient.SSN),
      Country: new FormControl(this.patient.Country),
      Address: new FormControl(this.patient.Address),
      Birthday: new FormControl(this.patient.Birthday),
    })

    this.countryService.getCountries().subscribe((response: any) => {
      this.countryList = response
    })
  }

  onUpdate() {
    this.patientService.updatePatient(this.editPatientForm.value);
    this._snackBar.open("Patient Updated successfully");
    this.router.navigate(['/patient']);
    this.onCloseForm;
  }
  onCloseForm() {
    this.router.navigate(['/patient'])
  }

}
