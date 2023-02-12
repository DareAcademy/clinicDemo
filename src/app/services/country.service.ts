import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class countryService{

    // http:HttpClient
    // constructor(_http:HttpClient){
    //     this.http=_http;
    // }

    constructor(private http:HttpClient){}

    getAllCountry():Observable<any> {
        debugger
       return this.http.get("http://localhost/ClinicSystemAPI2207/api/Country/LoadAll")
    }
    
}