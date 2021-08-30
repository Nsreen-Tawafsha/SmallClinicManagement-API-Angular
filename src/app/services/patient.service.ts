import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Patient } from '../models/patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  formData: Patient;
  patientList: Patient[] = [];
  patientPerson: Patient;

  constructor(private http: HttpClient) {
    this.formData = {
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
    this.patientPerson = {
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

  getPatientList() {
    return this.http.get(environment.apiURL + '/patients');
  }

  DeletePatient(patient: Patient) {
    this.http.delete(environment.apiURL + '/patients/' + patient.Id);
  }

  DeletePatients() {
    this.http.delete(environment.apiURL + '/patients/');
    this.patientList = [];
  }

  submitPatient(patient: Patient) {
    console.log(patient);
    this.http.post((environment.apiURL + '/patients'), patient,
      { headers: new HttpHeaders().set('token', 'xyz') }).subscribe(result => {
        console.log(result);
      });
    this.getPatientList
  }

  getPatientDetail(id: string) {
    return this.http.get((environment.apiURL + '/patients/') + id, { headers: new HttpHeaders().set('token', 'xyz') }).subscribe(result => {
      console.log(result);
    })
  }

  updatePatient(patientUpdate: Patient) {
    console.log(patientUpdate);
    return this.http.put((environment.apiURL + '/patients/' + patientUpdate.Id), patientUpdate).subscribe(data => {
      console.log(data);
    });
  }



}
