import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  signinForm!: FormGroup;
  constructor(private http : HttpClient,
              private router : Router, 
              private loginService: LoginService) { }
    
  @Output() isRegistration = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(){
    const userData = {
      email: this.signinForm.controls['username'].value,
      password: this.signinForm.controls['password'].value
    }
    this.loginService.userLogin(userData);
  }
  
  GoToRegistration(){
    this.isRegistration.emit(false);
  }

}
