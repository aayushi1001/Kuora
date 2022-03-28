import { Component, OnInit } from '@angular/core';
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
  
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'profile': new FormControl('Professor', [Validators.required]),
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'confirm-password': new FormControl(null, [Validators.required]),
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

  // ValidateEmails(control: FormControl): Promise<any> | Observable<any>{
  //   const promise = new Promise<any>((resolve, reject) => {
  //     if(control.value.toString())
  //   });
  //   return promise;
  // }
}
