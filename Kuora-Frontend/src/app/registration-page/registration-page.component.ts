import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
      'userData': new FormGroup({
        'username': new FormControl(null),
        'profile': new FormControl('Professor'),
        'email': new FormControl(null)
      }),
      'password': new FormControl(null),
      'confirm-password': new FormControl(null),
      'description': new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.signupForm); 
  }

  updateEmailInputType(formData: any){
    (this.signupForm.value.userData.profile === 'Student') ? this.emailInputType = 'number' : this.emailInputType = 'text';
  }
}
