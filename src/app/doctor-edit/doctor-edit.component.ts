import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { CountryService } from '../services/country.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {
  doctor: Doctor;
  countryList: any[] = [];
  editDoctorForm = this.formBuilder.group({
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

  constructor(public doctorService: DoctorService, private formBuilder: FormBuilder, private router: Router, private countryService: CountryService,
    private _snackBar: MatSnackBar) {
      this.doctor={
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
      }
     }

  ngOnInit(): void {
    this.doctor = this.doctorService.doctorPerson;

    this.editDoctorForm = new FormGroup({
      Id: new FormControl(this.doctor.Id),
      FirstName: new FormControl(this.doctor.FirstName),
      LastName: new FormControl(this.doctor.LastName),
      Address: new FormControl(this.doctor.Address),
      Notes: new FormControl(this.doctor.Notes),
      MonthlySalary: new FormControl(this.doctor.MonthlySalary),
      PhoneNumber: new FormControl(this.doctor.PhoneNumber),
      IBAN: new FormControl(this.doctor.IBAN),
      Email: new FormControl(this.doctor.Email),
      Country: new FormControl(this.doctor.Country),

    })

    this.countryService.getCountries().subscribe((response: any) => {
      this.countryList = response
    })
  }

  onUpdate() {
    this.doctorService.updateDoctor(this.editDoctorForm.value);
    this._snackBar.open("Doctor Updated successfully");
    this.router.navigate(['/doctor'])
    this.onCloseForm;
  }
  onCloseForm() {
    this.router.navigate(['/doctor'])
  }

}
