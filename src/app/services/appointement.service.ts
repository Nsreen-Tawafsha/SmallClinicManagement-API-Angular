import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Appointement } from '../models/appointement';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {

  formData: Appointement;
  appointementList: Appointement[] = [];
  appointementItem: Appointement;

  constructor(private http: HttpClient) {
    this.formData = {
      Id: 0,
      DoctorID: 0,
      DoctorName: '',
      PatientID: 0,
      PatientName: '',
      Reservation: new Date(),
    }
    this.appointementItem = {
      Id: 0,
      DoctorID: 0,
      DoctorName: '',
      PatientID: 0,
      PatientName: '',
      Reservation: new Date(),
    }
  }

  getAppontementList() {
    return this.http.get(environment.apiURL + '/Appointments');
  }
  //tests
  submitAppointement(appointment: Appointement) {
    console.log(appointment);
    this.http.post((environment.apiURL + '/Appontments'), appointment,
      { headers: new HttpHeaders().set('token', 'xyz') }).subscribe(result => {
        console.log(result);
      });
    this.getAppontementList
  }

}
