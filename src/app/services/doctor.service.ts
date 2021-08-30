import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  formData: Doctor;
  doctorList: Doctor[] = [];
  doctorPerson: Doctor;
  
  constructor(private http: HttpClient) {
    this.formData = {
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
    this.doctorPerson = {
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

  getDoctorList() {
    return this.http.get(environment.apiURL + '/doctors');
  }

  DeleteDoctor(doctor: Doctor) {
    this.http.delete(environment.apiURL + '/doctors/' + doctor.Id);
  }

  DeleteDoctors() {
    this.http.delete(environment.apiURL + '/doctors/');
    this.doctorList = [];
  }

  submitDoctor(doctor: Doctor) {
    console.log(doctor);
    this.http.post((environment.apiURL + '/doctors'), doctor,
      { headers: new HttpHeaders().set('token', 'xyz') }).subscribe(result => {
        console.log(result);
      });
    this.getDoctorList
  }

  getDoctorDetail(id: string) {
    return this.http.get((environment.apiURL + '/doctors/') + id, { headers: new HttpHeaders().set('token', 'xyz') }).subscribe(result => {
      console.log(result);
    })
  }

  updateDoctor(doctorUpdate: Doctor) {
    console.log(doctorUpdate);
    return this.http.put((environment.apiURL + '/doctors/' + doctorUpdate.Id), doctorUpdate).subscribe(data => {
      console.log(data);
    });
  }

}
