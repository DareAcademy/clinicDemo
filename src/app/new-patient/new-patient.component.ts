import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { country } from '../model/country';
import { patient } from '../model/patient';
import { countryService } from '../services/country.service';
import { patientService } from '../services/patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  patient:patient;
  fileName:string=""
  @ViewChild('f') patientForm:NgForm;
  licountry:country[]=[];
  constructor(private _countryService:countryService, private _patientService:patientService,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // call getAllCountry
    this._countryService.getAllCountry().subscribe({
      next:data=>
      {
        debugger;
        this.licountry=data
      //console.log(data)
    },
      error:err=>console.log(err)
    })
    debugger;

    let id=this.actRoute.snapshot.queryParams["patientId"]

    if(id != undefined){
      // request 
      this._patientService.Load(id).subscribe({
        next:data=>{
          this.patient=data;
          this.patientForm.form.patchValue({
            "txtFirstName":this.patient.firstName,
            "txtLastName":this.patient.lastName
          })
        }
      })

    }

  }


  onSave(){
    debugger
    var p=new patient();
    p.firstName=this.patientForm.value["txtFirstName"]
    p.lastName=this.patientForm.value["txtLastName"]
    p.phone=this.patientForm.value["txtPhone"]
    p.bDate=this.patientForm.value["txtBDate"]
    p.country_Id=parseInt (this.patientForm.value["ddlCountry"])
    p.path=this.fileName;
    this._patientService.Insert(p).subscribe({
      next:data=>console.log("Save Successfuly"),
      error:err=>console.log(err)
    })
    
  }
  onSelectFile(image:any)
  {
    debugger;
    var SelectedFile = image.target.files[0];
    var fd = new FormData();
    fd.append(SelectedFile.name , SelectedFile);
    this._patientService.UploadImage(fd).subscribe({
      next:data=>{
        debugger
        console.log(data)
        this.fileName="http://localhost/ClinicSystemAPI2207/StaticFile/"+ data
        console.log(data)
      },
      error:err=>console.log(err)
    })

  }


}
