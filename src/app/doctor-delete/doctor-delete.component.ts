import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-delete',
  templateUrl: './doctor-delete.component.html',
  styleUrls: ['./doctor-delete.component.css']
})
export class DoctorDeleteComponent implements OnInit {

  constructor(private doctorService: DoctorService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    if (this.doctorService.doctorPerson.Id) {
      this.doctorService.DeleteDoctor(this.doctorService.doctorPerson);
      this._snackBar.open("Docotr Deleted Successfully");
      this.router.navigate(['/doctor']);
    }
  }

}
