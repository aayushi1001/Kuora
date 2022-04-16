import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../resources/user-profile.service';
import { ActivatedRoute } from '@angular/router';
import { userDetails } from 'src/app/resources/user-details.model';
import { LoginService } from 'src/app/resources/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  isEditableMode: boolean = false;
  canEdit: boolean = false;
  userEmail!: string;
  editProfileForm!: FormGroup;

  constructor(private userProfile: UserProfile,
              private route: ActivatedRoute,
              private activeUser: LoginService ) { }

  ngOnInit(): void {
    this.userEmail = this.route.snapshot.queryParams['email'];
    this.getUserProfileDetails(this.userEmail);
    if( this.userEmail === this.activeUser.getActiveUserDetails().email){
      this.canEdit = true;
      this.editProfileForm = new FormGroup({
        'name': new FormControl({value: this.userDetails.name, disabled: !this.isEditableMode}, [Validators.required]),
        'password': new FormControl({value: "*******", disabled: !this.isEditableMode}, [Validators.required, Validators.minLength(8), this.PasswordValidation]),
        'bio': new FormControl({value: this.userDetails.bio, disabled: !this.isEditableMode}, [Validators.required])
      });
    }
  }

  userDetails: userDetails = {
    name: 'Undefined',
    email: 'Undefined',
    signupas: 'Undefined',
    bio: 'Undefined',
    verified: 'Undefined',
    blocked: false,
    pic: 'Undefined',
  };

  editableMode(){
    this.isEditableMode = true;
    this.editProfileForm.enable();
  }

  onSubmit(){
    this.isEditableMode = false;
    let password = this.editProfileForm?.controls['password'].value;
    let userData = new FormData();
    userData.append('name', this.editProfileForm?.controls['name'].value);
    userData.append('bio', this.editProfileForm?.controls['bio'].value);

    if(password !== "*******") {
      userData.append('password', password);
    }
    this.userProfile.updateUserProfile(this.userEmail, userData);
    this.editProfileForm.disable();
  }

  getUserProfileDetails(email: any){
    this.userDetails = this.userProfile.getUserProfileDetails(email);
  }

  PasswordValidation(control: FormControl){
    let specialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if((control.value !== null) && (!specialCharacter.test(control.value.toString()) || !/\d/.test(control.value.toString()))){
        return ({
          'InvalidPassword' : true
        });
      } else{
        return (null);
      }
  }

}

