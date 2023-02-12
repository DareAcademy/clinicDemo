import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Options } from "selenium-webdriver";
import { patient } from "../model/patient";

@Injectable()
export class patientService{
    constructor(private http:HttpClient){}

    Insert(p:patient):Observable<any>{
        debugger
        let userInfo=JSON.parse(localStorage.getItem("userInfo"))

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: 'Bearer ' + userInfo.token
            })
          };

       return this.http.post("http://localhost/ClinicSystemAPI2207/api/Patient/Insert",p,httpOptions)
    }

    LoadByName(name:string):Observable<any>{
        debugger
        let userInfo=JSON.parse(localStorage.getItem("userInfo"))

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: 'Bearer ' + userInfo.token
            })
          };


       return this.http.get("http://localhost/ClinicSystemAPI2207/api/Patient/LoadByName?Name="+name,httpOptions)
    }

    LoadAll():Observable<any>{
      debugger
      let userInfo=JSON.parse(localStorage.getItem("userInfo"))

      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: 'Bearer ' + userInfo.token
          })
        };


     return this.http.get("http://localhost/ClinicSystemAPI2207/api/Patient/LoadByName",httpOptions);
  }

    Load(id:number):Observable<any>{
      debugger
      let userInfo=JSON.parse(localStorage.getItem("userInfo"))

      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            Authorization: 'Bearer ' + userInfo.token
          })
        };


     return this.http.get("http://localhost/ClinicSystemAPI2207/api/Patient/Load?Id="+id,httpOptions)
  }

    UploadImage(data:FormData):Observable<any>{
        debugger
     return this.http.post("http://localhost/ClinicSystemAPI2207/api/Patient/UploadImage",data,{responseType: 'text'})
  }
}