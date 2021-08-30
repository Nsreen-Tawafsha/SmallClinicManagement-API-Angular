import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patient: any;
 
  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.patientService.getPatientList().subscribe((response: any) => {
      this.patientService.patientList = response;
    })
    this.patient = this.patientService.patientPerson;
  }

  onCloseForm() {
    this.router.navigate(['/patient'])
  }


  onEdit(patient: Patient) {
    this.patientService.patientPerson = patient;
    this.router.navigate(['/patient-edit/' + patient.Id]);
  }

  onDeletePatient(patient: Patient) {
    this.patientService.patientPerson = patient;
  }

}


