import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CountryService } from '../services/country.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {
  countryList: any[] = []
  loginForm = this.fb.group({
    Id: 0,
    FirstName: '',
    LastName: '',
    Address: '',
    Notes: '',
    MonthlySalary: 0,
    PhoneNumber: 0,
    IBAN: 0,
    Email: '',
    Country: ''
  });
  constructor(public service: DoctorService, private countryService: CountryService, public fb: FormBuilder, private router: Router
    , private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((response: any) => {
      this.countryList = response
    })

    this.loginForm = new FormGroup({
      FirstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      Address: new FormControl(),
      Notes: new FormControl(),
      MonthlySalary: new FormControl(),
      PhoneNumber: new FormControl(null, Validators.required),
      IBAN: new FormControl(),
      Email: new FormControl(null, [Validators.required, Validators.email, this.restrictedEmails]),
      Country: new FormControl(),
    })
  }

  onCloseForm() {
    this.router.navigate(['/doctor'])
  }

  onSubmit() {
    this.loginForm.value.Id = this.service.doctorList.length + 1;
    this.service.doctorList.push(this.loginForm.value);
    this.service.submitDoctor(this.loginForm.value);
    this._snackBar.open("Doctor added successfully");
    this.router.navigate(['/doctor']);
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
