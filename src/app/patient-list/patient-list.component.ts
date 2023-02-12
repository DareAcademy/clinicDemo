import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { patient } from '../model/patient';
import { patientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  liPatient:patient[]=[];
  @ViewChild('txtSearchName') txtName:ElementRef;
  constructor(private _patientService:patientService,private router:Router) { }

  ngOnInit(): void {
  }


  onSearch(){
    this._patientService.LoadByName(this.txtName.nativeElement.value).subscribe({
      next:data=>{
        debugger;
        this.liPatient=data
      },
      error:err=>console.log(err)
    })
  }

  onEdit(id:number){
    debugger
    this.router.navigate(['/dashboard/newPatient'],{queryParams:{patientId:id}})

  }
}
