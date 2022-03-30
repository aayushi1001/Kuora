import { Component, Output, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  genders = ['male', 'female'];
  userProfiles = ['Professor', 'Non-teaching Staff', 'Student'];
  signupForm!: FormGroup;
  emailInputType: string = 'text';
  @Output() isLogin:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'profile': new FormControl('Professor', [Validators.required]),
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8), this.PasswordValidation]),
      'confirm-password': new FormControl(null, [Validators.required, this.ConfirmPasswordValidation]),
      'description': new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.signupForm); 
  }

  updateEmailInputType(data: any){
    (data.signupForm.value.profile === 'Student') ? this.emailInputType = 'number' : this.emailInputType = 'text';
    console.log("called");
  }

  PasswordValidation(control: FormControl){
    let specialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if((control.value !== null) && (!specialCharacter.test(control.value.toString()) || !/\d/.test(control.value.toString()))){
        return ({'InvalidPassword' : true});
      } else{
        return (null);
      }
  }

  ConfirmPasswordValidation(control: FormControl){
    let a = "b";
    if(control.value !== null && this.signupForm.controls['password'] !== control.value){
      return ({'PasswordMismatch' : true});
    }
    return null;
  }

  GoToLogin(){
    this.isLogin = true;
  }
}
