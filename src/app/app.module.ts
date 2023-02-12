import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CountryComponent } from './country/country.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { countryService } from './services/country.service';
import { FormsModule } from '@angular/forms';
import { patientService } from './services/patient.service';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { accountService } from './services/account.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRputes: Routes=[
  
  {path:'', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'newPatient', component:NewPatientComponent},
    {path:'patientList', component:PatientListComponent},
    {path:'patientList1', component:PatientList1Component},
    {path:'country', component:CountryComponent},
    {path:'createAccount', component:CreateAccountComponent}
  ]},
  
]

@NgModule({
  declarations: [
    AppComponent,
    NewPatientComponent,
    PatientListComponent,
    CountryComponent,
    LoginComponent,
    CreateAccountComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRputes),
    HttpClientModule,
    FormsModule
  ],
  providers: [countryService, patientService, accountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
