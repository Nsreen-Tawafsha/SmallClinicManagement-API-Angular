import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {
  constructor(private router: Router, public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getDoctorList().subscribe((response: any) => {
      this.doctorService.doctorList = response;
    }
    )
  }

  AddNewDoctor() {
    this.router.navigate(['/doctor-create'])
  }

  onClearDoctors() {
    this.doctorService.DeleteDoctors();
  }

  getDetail(patient: Doctor) {
    this.doctorService.doctorPerson = patient;
  }

}
