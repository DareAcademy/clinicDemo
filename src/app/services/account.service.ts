import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { signInModel } from "../model/SignInModel";
import { signUpModel } from "../model/signUpModel";

@Injectable()
export class accountService{
constructor(private http:HttpClient){}

createAccount(user:signUpModel): Observable<any>{
   return this.http.post("http://localhost/ClinicSystemAPI2207/api/Account/CreateAccount",user)
}

Login(user:signInModel): Observable<any>{
    return this.http.post("http://localhost/ClinicSystemAPI2207/api/Account/Login",user)
 }
}