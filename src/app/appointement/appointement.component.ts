import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointement } from '../models/appointement';
import { AppointementService } from '../services/appointement.service';
import { DoctorService } from '../services/doctor.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styles: []
})
export class AppointementComponent implements OnInit {

  patientAll: any[] = [];
  doctorAll: any[] = [];

  constructor(private router: Router, public appointementService: AppointementService, public patientService: PatientService,
    public doctorService: DoctorService) { }

  ngOnInit(): void {
    this.patientService.getPatientList().subscribe((response: any) => {
      this.patientAll = response;
    }
    )
    this.doctorService.getDoctorList().subscribe((response: any) => {
      this.doctorAll = response;
    }
    )
    this.appointementService.getAppontementList().subscribe((response) => {
      this.appointementService.appointementList = response as Appointement[];
      console.log(this.appointementService.appointementList);
    }
    )
    for(let i=0 ; i<this.appointementService.appointementList.length ; i++){
      for(let j=0; j<this.patientAll.length; j++){
        if(this.patientAll[j].Id ==this.appointementService.appointementList[i].PatientID){
          this.appointementService.appointementList[i].PatientName = this.patientAll[j].FirstName + " " + this.patientAll[j].LastName;
        }      
      }
    }
    console.log(this.appointementService.appointementList)

    for (let i = 0; i < this.appointementService.appointementList.length; i++) {
      for (let j = 0; j < this.doctorAll.length; j++) {
        if (this.doctorAll[j].Id == this.appointementService.appointementList[i].DoctorID){
          this.appointementService.appointementList[i].DoctorName = this.doctorAll[j].FirstName + " " + this.doctorAll[j].LastName;
          console.log(this.appointementService.appointementList[i].DoctorName);
        }
          
      }
    }
  }

  AddNewAppointement() {
    this.router.navigate(['/appointement-create'])
  }

  onClearAppointements() {
   // this.appointementService;
  }

}
