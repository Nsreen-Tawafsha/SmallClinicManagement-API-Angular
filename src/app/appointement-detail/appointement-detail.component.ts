import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointement } from '../models/appointement';
import { AppointementService } from '../services/appointement.service';

@Component({
  selector: 'app-appointement-detail',
  templateUrl: './appointement-detail.component.html',
  styleUrls: ['./appointement-detail.component.css']
})
export class AppointementDetailComponent implements OnInit {

  /*appointement: Appointement;*/

  constructor(/*private appointmentService: AppointementService, private router: Router, private route: ActivatedRoute*/) {
    /*this.appointement = {
      Id: 0,
      DoctorID: 0,
      DoctorName:'',
      PatientID: 0,
      PatientName:'',
      Reservation: new Date(),
    }*/
  }

  ngOnInit(): void {
    /*this.appointmentService.getAppontementList().subscribe((response: any) => {
      this.appointmentService.appointementList = response;
    })
    console.log(this.appointmentService.appointementList);
    for (let i = 0; i < this.appointmentService.appointementList.length; i++) {
      //if(this.)
    }
    console.log(this.appointement)*/
  }

  /*onCloseForm() {
    this.router.navigate(['/appointement'])
  }*/

}
