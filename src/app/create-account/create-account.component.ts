import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { signUpModel } from '../model/signUpModel';
import { accountService } from '../services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  @ViewChild('f') signUpForm:NgForm;
  constructor(private _accountService:accountService ) { }

  ngOnInit(): void {
  }

  onSave(){
    var user=new signUpModel();
    user.name=this.signUpForm.value["txtName"]
    user.bDate=this.signUpForm.value["txtBDate"]
    user.username=this.signUpForm.value["txtusername"]
    user.email=this.signUpForm.value["txtEmail"]
    user.password=this.signUpForm.value["txtPassword"]
    user.confirmPassword=this.signUpForm.value["txtConfirmPassword"]
    this._accountService.createAccount(user).subscribe({
      next:data=>console.log("create user successfuly"),
      error:err=>console.log(err)
    })
  }

}
