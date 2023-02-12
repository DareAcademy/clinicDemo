import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { signInModel } from '../model/SignInModel';
import { accountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage:string
  @ViewChild('f') SignInForm:NgForm;
  constructor(private _accountService:accountService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    var user=new signInModel();
    user.username=this.SignInForm.value["txtUsername"]
    user.password=this.SignInForm.value["txtPassword"]

    this._accountService.Login(user).subscribe({
      next:data=>{
        debugger
        console.log(data)
        localStorage.setItem('userInfo',JSON.stringify(data))
        this.router.navigate(['/dashboard/patientList'])
      },
      error:err=>{
        console.log(err)
        this.errorMessage="Invalid Username or Password";
      }

    })
    
  }
}
