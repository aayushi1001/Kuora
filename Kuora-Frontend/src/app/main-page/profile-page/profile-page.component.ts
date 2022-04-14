import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../resources/user-profile.service';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { userDetails } from 'src/app/resources/user-details.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  isEditableMode: boolean = false;
  constructor(private userProfile: UserProfile,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    let userEmail = this.route.snapshot.queryParams['email'];
    console.log(userEmail);
    this.getUserProfileDetails(userEmail);
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
  }

  onSubmit(){
    this.isEditableMode = false;
  }

  getUserProfileDetails(email: any){
    this.userDetails = this.userProfile.getUserProfileDetails(email);
  }
}

