import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {

  doctor: Doctor;
  constructor(private doctorService: DoctorService, private router: Router, private route: ActivatedRoute) {
    this.doctor = {
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
    this.doctorService.getDoctorList().subscribe((response: any) => {
      this.doctorService.doctorList = response;
    })
this.doctor = this.doctorService.doctorPerson;
  }

  onCloseForm() {
    this.router.navigate(['/doctor'])
  }
  onEdit(doctor: Doctor) {
    this.doctorService.doctorPerson = doctor;
    this.router.navigate(['/doctor-edit/' + doctor.Id]);
  }

  onDeleteDoctor(doctor: Doctor) {
    this.doctorService.doctorPerson = doctor;
  }

}
