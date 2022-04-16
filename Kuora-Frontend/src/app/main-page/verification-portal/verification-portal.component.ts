import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/resources/login.service';
import { VerifyRequestService } from 'src/app/resources/verify-request.service';

@Component({
  selector: 'app-verification-portal',
  templateUrl: './verification-portal.component.html',
  styleUrls: ['./verification-portal.component.css']
})
export class VerificationPortalComponent implements OnInit {

  verificationForm!: FormGroup;
  constructor(private sendRequest: VerifyRequestService,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.verificationForm = new FormGroup({
      'reason': new FormControl(null, [Validators.required]),
      'verificationDocument': new FormControl(null, [Validators.required]),
    });
  }

  ngAfterViewInit(){
    //TODO: If req already pending, can't send another request
  }

  onSubmit(){
    let currenctDate = new Date();
    let date = currenctDate.getFullYear()+'-'+(currenctDate.getMonth()+1)+'-'+currenctDate.getDate();  //YYYY-MM-DD
    console.log(date);

    const verificationDetails = new FormData();
    verificationDetails.append('request', this.verificationForm.controls['reason'].value);
    verificationDetails.append('email', this.loginService.getActiveUserDetails().email);
    verificationDetails.append('date', date);
    verificationDetails.append('documentPic', this.verificationForm.controls['verificationDocument'].value);

    this.sendRequest.sendVerificationRequest(verificationDetails);
  }
}
