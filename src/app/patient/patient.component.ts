import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../models/patient';



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styles: []
})
export class PatientComponent implements OnInit {

  constructor(private router: Router, public patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatientList().subscribe((response: any) => {
      this.patientService.patientList = response;
    }
    )
  }

  resetForm(form?: NgForm) {

    this.patientService.formData = {
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
    };
  }

  AddNewPatient() {
    this.router.navigate(['/patient-create'])
  }

  onClearPatients() {
    this.patientService.DeletePatients();
  }

  getDetail(patient: Patient) {
    this.patientService.patientPerson = patient;
  }

}
