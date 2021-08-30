import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { CountryService } from '../services/country.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
  countryList: any[] = []
  loginForm = this.fb.group({
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


  constructor(public service: PatientService, private countryService: CountryService, public fb: FormBuilder, private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((response: any) => {
      this.countryList = response
    })

    this.loginForm = new FormGroup({
      FirstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email, this.restrictedEmails]),
      Gender: new FormControl(null, Validators.required),
      PhoneNumber: new FormControl(null, Validators.required),
      RegistrationDate: new FormControl(null, Validators.required),
      SSN: new FormControl(),
      Country: new FormControl(),
      Address: new FormControl(),
      Birthday: new FormControl(),
    })

  }
  onCloseForm() {
    this.router.navigate(['/patient'])
  }

  onSubmit() {
    this.loginForm.value.Id = this.service.patientList.length + 1;
    this.service.patientList.push(this.loginForm.value);
    this.service.submitPatient(this.loginForm.value);
    this._snackBar.open("Patient added successfully");
    this.router.navigate(['/patient'])
    this.onCloseForm();
  }

  restrictedEmails(control: FormControl) {
    let emails = ['test@test.com', 'aa@aa.com']
    if (emails.indexOf(control.value) > -1) {
      return { restrictedEmail: true }
    }
    return null;
  }


}
